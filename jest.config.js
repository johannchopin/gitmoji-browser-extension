module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.svelte?$': 'jest-transform-svelte'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'svelte'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!(svelte-portal)/)'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
