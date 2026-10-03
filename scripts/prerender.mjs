import { build } from "esbuild";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const cacheDir = path.join(root, "node_modules", ".cache", "prerender");
const bundle = path.join(cacheDir, "prerender.cjs");
const siteUrl = "https://novotvservice.by";

await mkdir(cacheDir, { recursive: true });
await build({
  entryPoints: [path.join(root, "src", "prerender.tsx")],
  outfile: bundle,
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  target: "node18",
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "warning",
});

const require = createRequire(import.meta.url);
const { render } = require(bundle);
const { html, styles, structuredData } = render();
await rm(cacheDir, { recursive: true, force: true });

const indexPath = path.join(buildDir, "index.html");
const template = await readFile(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error("Root container not found in build/index.html");
}

const page = template
  .replace("</head>", `${styles}<script type="application/ld+json">${structuredData}</script></head>`)
  .replace(marker, `<div id="root">${html}</div>`);
await writeFile(indexPath, page);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
await writeFile(path.join(buildDir, "sitemap.xml"), sitemap);

console.log(`Prerendered ${indexPath} (${Math.round(page.length / 1024)} KB) and sitemap.xml`);
