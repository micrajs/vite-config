const { defineConfig: defineViteConfig } = require('vite');
const { cwd } = require('../utilities/cwd');
const { deepMerge } = require('../utilities/deep-merge');

export function defineConfig(userConfig) {
  return defineViteConfig(
    deepMerge(
      {
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

        test: {
          global: true,
          coverage: {
            excludeNodeModules: true,
            reporter: ['json-summary'],
            reportsDirectory: 'coverage',
            exclude: ['.*.*'],
          },
        },
      },
      userConfig,
    ),
  );
}
