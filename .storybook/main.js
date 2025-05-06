import { mergeConfig } from 'vite';
import path from 'path';

export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: '/design-system/', // alleen nodig voor Vite previews buiten Storybook
    });
  },
};