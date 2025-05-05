const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Disable the package.json exports field resolution
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
