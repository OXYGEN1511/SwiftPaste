import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Replace 3000 with your desired port
    },
    define: {
        global: "window", // Fix for SockJS expecting `global`
      },
});


