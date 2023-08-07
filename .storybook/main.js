const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    });

    config.resolve.alias['~/containers'] = path.resolve(
      __dirname,
      '../src/layouts/containers',
    );
    config.resolve.alias['~/pages'] = path.resolve(
      __dirname,
      '../src/layouts/pages',
    );
    config.resolve.alias['~/i18n'] = path.resolve(
      __dirname,
      '../src/layouts/i18n',
    );
    config.resolve.alias['~/utils'] = path.resolve(
      __dirname,
      '../src/layouts/utils',
    );
    config.resolve.alias['~/test'] = path.resolve(__dirname, '../src/test');
    config.resolve.alias['~'] = path.resolve(__dirname, '../src');

    return config;
  },
};
