/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */
const withImages = require('next-images')
const withTM = require('next-transpile-modules')(
  [
    'components',
    '@emotion/styled',
    '@react-native-community/hooks',
    'react-native-svg',
    'react-native-svg-flagkit',
  ],
  {
    resolveSymlinks: true,
  },
)

module.exports = withImages(
  withTM({
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      }
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]
      config.module.rules.push({
        test: /.mp3$/,
        use: {
          loader: 'url-loader',
        },
      })
      return config
    },
  }),
)
