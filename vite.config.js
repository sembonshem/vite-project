import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/vite-project", //added for deploying react app to github pages
  plugins: [react()],
})
