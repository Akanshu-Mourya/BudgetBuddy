import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost", // Replace with your desired hostname or IP address
    port: 3000,        // Replace 3000 with the port you want
    open: true,        // Automatically open the app in the browser
  },
});