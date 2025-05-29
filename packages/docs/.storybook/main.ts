import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname_ = dirname(filename);

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.@(ts|tsx)',
    '../src/pages/**/*.mdx',
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(dirname_, '../src'),
    };
    return config;
  },
};

export default config;
