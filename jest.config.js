module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
