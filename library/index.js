const { defineConfig: defineViteConfig } = require('vite');

const { vite } = require('../vite');
const { vitest } = require('../vitest');
const { deepMerge } = require('../utilities/deep-merge');

export function defineConfig(userConfig) {
  return defineViteConfig(
    deepMerge(
      vite,
      vitest,
      userConfig,
    ),
  );
}
