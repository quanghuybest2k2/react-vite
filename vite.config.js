import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: {
            '@public': `${path.resolve(__dirname, './public/')}`,
            '~': path.resolve(__dirname, './src/'),
            '@assets': `${path.resolve(__dirname, './src/assets/')}`,
            '@pages': `${path.resolve(__dirname, './src/pages/')}`
        }
    }
});
