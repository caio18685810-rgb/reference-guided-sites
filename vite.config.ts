// @lovable.dev/vite-tanstack-config already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { promises as fs } from "node:fs";
import path from "node:path";

export default defineConfig({
  vite: {
    base: "/reference-guided-sites/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      onSuccess: async ({ page, html }) => {
        if (page.path === "/" || page.path === "") {
          const fallbackPath = path.resolve(".output/public/404.html");
          await fs.writeFile(fallbackPath, html);
        }
      },
    },
    pages: [{ path: "/" }],
  },
});
