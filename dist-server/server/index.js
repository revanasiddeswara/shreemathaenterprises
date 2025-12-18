import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
const app = express();
const httpServer = createServer(app);
// JSON parser
app.use(express.json({
    verify: (req, _res, buf) => {
        req.rawBody = buf;
    },
}));
app.use(express.urlencoded({ extended: false }));
// Logger
export function log(message, source = "express") {
    const time = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    console.log(`${time} [${source}] ${message}`);
}
// API logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    const originalJson = res.json;
    res.json = function (body) {
        res._jsonBody = body;
        return originalJson.call(this, body);
    };
    res.on("finish", () => {
        if (req.path.startsWith("/api")) {
            log(`${req.method} ${req.path} ${res.statusCode} (${Date.now() - start}ms)`);
        }
    });
    next();
});
// BOOTSTRAP
(async () => {
    await registerRoutes(httpServer, app);
    app.use((err, _req, res, _next) => {
        res.status(err.status || 500).json({
            message: err.message || "Internal Server Error",
        });
        console.error(err);
    });
    if (process.env.NODE_ENV === "production") {
        serveStatic(app);
    }
    else {
        const { setupVite } = await import("./vite");
        await setupVite(httpServer, app);
    }
    const port = Number(process.env.PORT || 5000);
    httpServer.listen(port, "0.0.0.0", () => {
        log(`Server running on port ${port}`);
    });
})();
