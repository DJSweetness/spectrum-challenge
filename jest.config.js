module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: [
      "<rootDir>/src/setuptests.ts"
    ],
};