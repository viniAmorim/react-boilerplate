/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~/containers': path.resolve(__dirname, './src/layouts/containers'),
      '~/pages': path.resolve(__dirname, './src/layouts/pages'),
      '~': path.resolve(__dirname, './src/'),
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      });

      return webpackConfig;
    },
  },
};
