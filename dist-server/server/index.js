import express from "express";
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./static.js";
import { createServer } from "http";
import { fileURLToPath } from "url";
import path from "path";
const app = express();
const httpServer = createServer(app);
// Fix ESM dirname for Windows/Node
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Parse JSON and store raw body
app.use(express.json({
    verify: (req, _res, buf) => {
        req.rawBody = buf;
    },
}));
app.use(express.urlencoded({ extended: false }));
// Centralized logging helper
export function log(message, source = "express") {
    const formattedTime = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    console.log(`${formattedTime} [${source}] ${message}`);
}
// Logging middleware for API requests
app.use((req, res, next) => {
    const start = Date.now();
    const requestPath = req.path;
    let capturedJsonResponse = undefined;
    const originalJson = res.json;
    res.json = function (body, ...rest) {
        capturedJsonResponse = body;
        return originalJson.apply(res, [body, ...rest]);
    };
    res.on("finish", () => {
        const duration = Date.now() - start;
        if (requestPath.startsWith("/api")) {
            let logLine = `${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }
            log(logLine);
        }
    });
    next();
});
// MAIN SERVER FUNCTION
(async () => {
    // Register API routes BEFORE Vite middleware
    await registerRoutes(httpServer, app);
    // Error handler middleware
    app.use((err, _req, res, _next) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
        throw err; // preserve server logs
    });
    // PRODUCTION → serve static files from dist
    if (process.env.NODE_ENV === "production") {
        serveStatic(app);
        // DEVELOPMENT → attach Vite middleware (middlewareMode: true)
    }
    else {
        const { setupVite } = await import("./vite.js");
        await setupVite(httpServer, app);
    }
    // Use PORT=... if defined, fallback to 5000
    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen({
        port,
        host: "0.0.0.0",
        reusePort: true,
    }, () => {
        log(`server running at http://localhost:${port}`);
    });
})();
