/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  clearMocks: true,
  displayName: 'App-Orçamento',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: [join(__dirname, '**/*.test.{ts,tsx}')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.((jpg|jpeg|png|gif)|svg)$':
      '<rootDir>/node_modules/jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!(ui-kit)/)'],
  moduleNameMapper: {
    '~/themes/(.*)': '<rootDir>/src/themes/$1',
    '~/containers/(.*)': '<rootDir>/src/layouts/src/containers/$1',
    '~/pages/(.*)': '<rootDir>/src/layouts/src/pages/$1',
    '~/utils/(.*)': '<rootDir>/src/layouts/utils/$1',
    '~/i18n/(.*)': '<rootDir>/src/layouts/src/i18n/$1',
    '~/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [join(__dirname, '/src/test/config/jest.setup.ts')],
  snapshotResolver: join(__dirname, '/src/test/config/snapshotResolver.ts'),
  testEnvironment: 'jsdom',
};
