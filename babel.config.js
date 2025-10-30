module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // Base para las rutas personalizadas
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@costants': './src/costants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-paper/babel',
    //'react-native-reanimated/plugin', // Este debe ir al final segun la documentaciÃ³n de react-native-reanimated
  ],
};
