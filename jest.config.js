/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts"],
  coverageThreshold: {
    global: {
      functions: 80,
      statements: 80,
    },
  },
};
