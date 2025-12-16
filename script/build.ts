import { rm } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";

const run = promisify(exec);

async function buildAll() {
  console.log("Cleaning dist...");
  await rm("dist", { recursive: true, force: true });

  console.log("Building client with Vite...");
  await run("vite build");

  console.log("Building server with TypeScript compiler...");
  await run("npx tsc --project tsconfig.server.json");

  console.log("Build complete!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
