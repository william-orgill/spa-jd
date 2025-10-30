import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), viteSingleFile()],
  resolve: {
    // Ensure only a single React instance is used across the app and libraries
    dedupe: ["react", "react-dom"],
  },
});
