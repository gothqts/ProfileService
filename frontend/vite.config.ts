import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), tsconfigPaths()],
    resolve: {
        alias: {
            assets: '/src/assets',
            enums: '/src/enums',
            store: '/src/store',
            navigation: '/src/navigation',
            screens: '/src/screens',
            services: '/src/services',
            shared: '/src/shared',
            styles: '/src/styles',
            types: '/src/types',
            utils: '/src/utils',
        },
    },
})
