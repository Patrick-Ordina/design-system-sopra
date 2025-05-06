import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

const brandTitle = 'Sopra Steria | Design System';
const brandUrl = 'https://www.soprasteria.com/nl';

const lightTheme = {
  ...themes.light,
  brandTitle,
  brandUrl,
  brandImage: 'images/logo-soprasteria-light.svg',
};

const darkTheme = {
  ...themes.dark,
  brandTitle,
  brandUrl,
  brandImage: 'images/logo-soprasteria-dark.svg',
};

const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

addons.setConfig({
  theme: isDark ? darkTheme : lightTheme,
});