/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Design Tokens',
          'Elementen',
          'Componenten',
          'Layout',
          'Patronen',
          'Thema',
          'Documentatie',
        ],
      },
    },
  },
};

export default preview;