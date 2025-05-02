/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'], // <--- deze regel is essentieel
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
  ],
};