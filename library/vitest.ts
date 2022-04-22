import type { UserConfig } from 'vitest/config';

export const vitest: Partial<UserConfig> = {
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
