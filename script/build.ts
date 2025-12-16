import { build as viteBuild } from "vite";
import { rm } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";

const run = promisify(exec);

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building client with Vite...");
  await viteBuild();

  console.log("Building server with TypeScript compiler...");
  await run("npx tsc --project tsconfig.server.json");


  console.log("Build completed successfully.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
