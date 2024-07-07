import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["node_modules/express/index.js"],
  outDir: "./pexpress",
  // splitting: true,
  sourcemap: true,
  dts: true,
  format: "cjs",
  bundle: true,
  // treeshake: true,
  clean: true,
  metafile: true,
});
