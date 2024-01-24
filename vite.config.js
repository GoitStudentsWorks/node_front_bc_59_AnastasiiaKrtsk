import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@mui/x-date-pickers"],
  },
  plugins: [react()],
  base: "/node_front_bc_59_AnastasiiaKrtsk"
});
