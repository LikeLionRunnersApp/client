import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), envCompatible()],
  server: { open: true, port: 3000 },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@stories', replacement: path.resolve(__dirname, 'src/stories') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@redux', replacement: path.resolve(__dirname, 'src/redux') },
    ],
  },
})
