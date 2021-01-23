/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */
const withImages = require('next-images')
const withTM = require('next-transpile-modules')(
  [
    'components',
    '@emotion/styled',
    '@react-native-community/hooks',
    'react-native-svg',
  ],
  {
    resolveSymlinks: true,
  },
)

module.exports = withImages(
  withTM({
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
      return config
    },
  }),
)
