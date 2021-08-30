import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Global, ThemeProvider } from '@emotion/react';

import theme from '../../src/common/styles/theme';
import globalStyle from '../../src/common/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  backgrounds: {
    default: 'clear',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
