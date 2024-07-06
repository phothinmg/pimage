import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  outDir: "./dist/cjs",
  splitting: true,
  sourcemap: true,
  dts: true,
  format: "cjs",
  bundle: true,
  treeshake: true,
  clean: true,
  metafile: true,
});
