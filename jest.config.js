/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  collectCoverage: true,
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["**/*.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/index.ts"],
  coverageThreshold: {
    global: {
      functions: 80,
      statements: 80
    }
  },
  moduleNameMapper: {
    "@infra/(.*)": "<rootDir>/infra/$1",
    "@domain/(.*)": "<rootDir>/domain/$1",
    "@application/(.*)": "<rootDir>/application/$1"
  }
};
