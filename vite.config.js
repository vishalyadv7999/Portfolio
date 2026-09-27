import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolveSiteUrl, siteMetadata } from './build/site-metadata.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), siteMetadata(resolveSiteUrl({ ...loadEnv(mode, process.cwd(), ''), ...process.env }))],
}))
