module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],

        alias: {
          '@src': './src',
          '@components': './src/components',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
