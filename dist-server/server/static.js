import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// ESM-safe dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export function serveStatic(app) {
    const distPath = path.resolve(__dirname, "../../dist/public");
    if (!fs.existsSync(distPath)) {
        throw new Error(`Could not find client build at ${distPath}. Did you run vite build?`);
    }
    app.use(express.static(distPath));
    // SPA fallback
    app.use("*", (_req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
}
