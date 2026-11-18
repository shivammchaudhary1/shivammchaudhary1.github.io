import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build",
    assetsInlineLimit: 0,
    target: ["chrome107", "edge107", "firefox104", "safari16"],
  },
});
