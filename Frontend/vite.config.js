import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import typography from "@tailwindcss/typography";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), typography],
});
