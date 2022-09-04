module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTest.js"],
    moduleNameMapper: {
        "\\.css$": "<rootDir>/src/__mocks__/styleMock.js",
    },
    testEnvironment: "jest-environment-jsdom",
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
};
