module.exports.vitest = {
  test: {
    global: true,
    coverage: {
      excludeNodeModules: true,
      reporter: ['json-summary'],
      reportsDirectory: 'coverage',
      exclude: ['.*.*'],
    },
  },
};
