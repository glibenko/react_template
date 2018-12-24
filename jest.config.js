module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    './src',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
