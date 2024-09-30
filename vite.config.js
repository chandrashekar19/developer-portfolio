import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any necessary aliases here
    },
  },
  // Add this loaders property to set .js files to 'jsx'
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  esbuild: {
    loader: {
      ".js": "jsx", // Treat .js files as .jsx
    },
  },
});
