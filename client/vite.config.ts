import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@sass": "/src/sass",
      "@layouts": "/src/layouts",
      "@containers": "/src/containers",
      "@context": "/src/context",
    },
  },
});
