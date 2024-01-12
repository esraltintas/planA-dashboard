module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)s(x)?$': 'babel-jest',
    '.+\\.(css|sass|scss|png|jpg|jpeg|svg|ttf|woff|woff2)$':
        'jest-transform-stub'
  },
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ]
};
