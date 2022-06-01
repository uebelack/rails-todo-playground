module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['app/javascript/**/*.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/vendor/'],
  testEnvironment: 'jsdom',
  testMatch: ['**/test/javascript/**/*-test.js'],
};
