import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: defineVitestConfig({
    environment: 'jsdom', // Required for React component testing
    globals: true, // Use global Jest-like functions like 'describe', 'test', 'expect'
    setupFiles: './src/test/tests.setup.js',
  }),
});
