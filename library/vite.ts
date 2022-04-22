import { UserConfig } from 'vitest/config';

const { cwd } = require('../utilities/cwd');

export const vite: Partial<UserConfig> = {
  build: {
    outDir: cwd('.'),
    lib: {
      entry: cwd('index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => {
        if (format === 'cjs') {
          return `[name].js`;
        }
        if (format === 'es') {
          return `[name].mjs`;
        }
        return `[name].${format}.js`;
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        preserveModules: true,
      },
    },
  },

  resolve: {
    alias: {
      '@': cwd(),
    },
  },
};
