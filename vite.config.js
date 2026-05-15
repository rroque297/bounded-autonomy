import { defineConfig } from 'vite'

export default defineConfig({
  // root: the folder Vite treats as the web root (where index.html lives)
  root: '.',

  // build: settings for when you run "npm run build"
  build: {
    // outDir: where Vite puts the finished, optimised files ready to deploy
    outDir: 'dist',
    // emptyOutDir: clear the dist folder before each new build (prevents stale files)
    emptyOutDir: true,
  },

  // server: settings for the local dev server ("npm run dev")
  server: {
    // open: automatically open your browser when the dev server starts
    open: true,
    // port: the local address will be http://localhost:5173
    port: 5173,
  },
})
