/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@botbrews/components': '<rootDir>/src/design-system/components',
    '^@botbrews/typography':
      '<rootDir>/src/design-system/foundation/typography/typography',
    '@botbrews/utils': '<rootDir>/src/utils',
    '@botbrews/assets/(.*)$': '<rootDir>/src/design-system/assets/$1',
    '@botbrews/breakpoints':
      '<rootDir>/src/design-system/foundation/breakpoints',
    '@botbrews/components/types':
      '<rootDir>/src/design-system/components/types.d.ts',
  },
}
