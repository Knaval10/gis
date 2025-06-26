// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": path.resolve("./src/components"),
      "#pages": path.resolve("./src/pages"),
      "#lib": path.resolve("./src/lib"),
      "#assets": path.resolve("./src/assets"),
      "#hooks": path.resolve("./src/hooks"),
    },
  },
  server: {
    host: true,
  },
});
