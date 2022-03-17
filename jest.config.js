/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.ts": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/{!(index),}.ts"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "./src/@types",
    "./src/interfaces",
    "./src/register-alias.ts",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  coverageProvider: "v8",
  maxWorkers: "50%",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testEnvironment: "jest-environment-node",
  testMatch: ["**/*.spec.ts"],
  verbose: true,
};
