import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Added server object to configure port #
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
