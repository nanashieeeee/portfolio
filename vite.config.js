import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Leave this as an empty string
  build: {
    outDir: "dist", // ✅ Ensure this is correct
    assetsDir: "assets", // ✅ Ensure assets are in an "assets" folder
  },
})
