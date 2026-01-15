// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: ['react-native-worklets/plugin'],
// };

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          underscore: 'lodash',
          '@src': './src',
          '@components': './src/components',
        },
      },
    ],
  ],
};
