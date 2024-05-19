module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/*.vue',
    '**/*.js',
    '!**/*.config.js', // Exclude *.config.js files
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
  ],
  reporters: [['default', { summaryThreshold: 1 }]],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['json', 'js', 'vue'],
  modulePathIgnorePatterns: [
    './dist',
    './node_modules',
  ],
  transform: {
    '^[^.]+.vue$': '<rootDir>/node_modules/@vue/vue2-jest',
    '^.+\\.js$': ['<rootDir>/node_modules/babel-jest'],
  },
};
