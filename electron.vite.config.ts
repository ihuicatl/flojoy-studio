import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    server: {
      port: 5391,
    },
    root: "./src",
    publicDir: resolve(__dirname, "public"),
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/index.html"),
        },
      },
    },
    resolve: {
      alias: {
        "@src": resolve(__dirname, "src/renderer"),
        "@hooks": resolve(__dirname, "src/renderer/hooks"),
        "@feature": resolve(__dirname, "src/renderer/feature"),
        "@/components": resolve(__dirname, "src/renderer/components"),
        "@/assets": resolve(__dirname, "src/renderer/assets"),
        "@/lib": resolve(__dirname, "src/renderer/lib"),
      },
    },
    plugins: [react()],
  },
});
