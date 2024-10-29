// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // to simulate a DOM for testing
    setupFiles: './src/setupTests.ts', // optional setup file
    include: ['src/**/*.test.tsx'], // specifies test file location and format
  }
});
