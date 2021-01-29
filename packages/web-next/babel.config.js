module.exports = {
  presets: [
    'next/babel',
    '@emotion/babel-preset-css-prop',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [['react-native-web', { commonjs: true }]],
}
