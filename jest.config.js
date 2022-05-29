module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['app/javascript/components/**/*.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/vendor/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/test/javascript/**/*-test.js'],
};
