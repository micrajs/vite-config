const { defineConfig: defineViteConfig } = require('vite');

const { vite } = require('./vite');
const { vitest } = require('./vitest');
const { deepMerge } = require('../utilities/deep-merge');

/**
 * @type {import('vite').defineConfig}
 */
module.exports.defineConfig = function defineConfig(userConfig) {
  return defineViteConfig(deepMerge(vite, vitest, userConfig));
};
