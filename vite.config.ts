import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
