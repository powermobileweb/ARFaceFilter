module.exports = {
  preset: "react-native",
  // collectCoverage: true,
  // coveragePathIgnorePatterns: ["/node_modules/", "/jest"],
  rootDir: "../",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  moduleNameMapper: {
    "^[@./a-zA-Z0-9$_-]+\\.(png|gif|svg)$":
      "<rootDir>/jest/stubs/RelativeImageStub.ts",
    "@react-native-firebase/analytics":
      "<rootDir>/jest/mocks/@react-native-firebase/analytics.ts",
    "@react-native-firebase/crashlytics":
      "<rootDir>/jest/mocks/@react-native-firebase/crashlytics.ts",
    "@react-native-firebase/in-app-messaging":
      "<rootDir>/jest/mocks/@react-native-firebase/in-app-messaging.ts",
    "@react-native-firebase/messaging":
      "<rootDir>/jest/mocks/@react-native-firebase/messaging.ts",
    "expo-av": "<rootDir>/jest/mocks/expo-av.ts",
    "react-native-permissions":
      "<rootDir>/jest/mocks/react-native-permissions.ts",
    "@react-native-community/push-notification-ios":
      "<rootDir>/jest/mocks/@react-native-community/push-notification-ios.ts",
    "@react-native-community/async-storage":
      "<rootDir>/jest/mocks/@react-native-community/async-storage.ts",
    "@sentry/react-native": "<rootDir>/jest/mocks/@sentry/react-native.ts",
    "react-native-localize": "<rootDir>/jest/mocks/react-native-localize.ts",
    "react-native-user-agent":
      "<rootDir>/jest/mocks/react-native-user-agent.ts",
    "react-native-localization":
      "<rootDir>/jest/mocks/react-native-localization.ts",
    "react-native-reanimated":
      "<rootDir>/node_modules/react-native-reanimated/mock",
    "@unimodules": "<rootDir>/jest/mocks/@unimodules/react-native-adapter",
  },
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "\\.(ts|tsx)$": "ts-jest",
  },
  setupFiles: [
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/enzyme.config.js"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@dooboo-ui/native-switch-toggle)",
  ],

  cacheDirectory: ".jest/cache",

  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
};
