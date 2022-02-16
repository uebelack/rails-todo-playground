module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['**/app/javascript/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/test/javascript/**/*-test.js'],
};
