export default {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.test.js']
};