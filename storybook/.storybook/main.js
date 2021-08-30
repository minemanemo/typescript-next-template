const path = require('path');

module.exports = {
  stories: [
    path.resolve(__dirname, '..', '**/*.stories.mdx'),
    // path.resolve(__dirname, '..', '**/*.stories.@(js|jsx)'),
    // path.resolve(__dirname, '..', '**/*.stories.@(ts|tsx)'),
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@common': path.resolve(__dirname, '..', '..', 'src/common'),
      '@containers': path.resolve(__dirname, '..', '..', 'src/containers'),
      '@modules': path.resolve(__dirname, '..', '..', 'src/modules'),
      '@pages': path.resolve(__dirname, '..', '..', 'src/pages'),
    };
    return config;
  },
  typescript: {
    check: true,
    checkOption: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
