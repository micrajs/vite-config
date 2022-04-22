import type { defineConfig as DefineConfig, UserConfig } from 'vitest/config';
import { defineConfig as defineViteConfig } from 'vite';
import { vite } from './vite';
import { vitest } from './vitest';
import { deepMerge } from '../utilities/deep-merge';

export function defineConfig(config: UserConfig): UserConfig {
  return defineViteConfig(deepMerge(vite, vitest, config)) as UserConfig;
}
