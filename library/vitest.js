/**
 * @type {import('vitest/config').UserConfig}
 */
module.exports.vitest = {
  test: {
    globals: true,
    coverage: {
      excludeNodeModules: true,
      reporter: ['json-summary'],
      reportsDirectory: 'coverage',
      exclude: ['.*.*'],
    },
  },
};
