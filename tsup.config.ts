import { defineConfig } from "tsup";
// @ts-ignore
import babel from 'esbuild-plugin-babel';
export default defineConfig({
  entryPoints: ["src/index.ts"],
  outDir: "./dist",
  sourcemap: true,
  dts: true,
  format: "esm",
  bundle: true,
  clean: true,
  metafile: true,
  esbuildPlugins: [babel()],
});
