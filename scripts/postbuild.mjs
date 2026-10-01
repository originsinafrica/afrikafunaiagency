import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const publicDir = resolve(root, ".output/public");
const distDir = resolve(root, "dist");

const ssrMod = await import(resolve(root, ".output/server/_ssr/ssr.mjs"));
const ssr = ssrMod.default ?? ssrMod;

const response = await ssr.fetch(new Request("http://localhost/"), {}, {});
if (!response.ok) {
  throw new Error(`SSR pre-render failed with status ${response.status}`);
}
const html = await response.text();

await mkdir(publicDir, { recursive: true });
await rm(resolve(publicDir, "favicon.ico"), { force: true });
await writeFile(resolve(publicDir, "index.html"), html, "utf-8");

await rm(distDir, { recursive: true, force: true });
await cp(publicDir, distDir, { recursive: true });
console.log("Generated .output/public/index.html and copied static build to dist/");
