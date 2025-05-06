import { mergeConfig } from 'vite';

export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'], // ← nodig voor logo/fonts/etc.
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: '/design-system/', // 👈 naam van je GitHub repo
    });
  },
};