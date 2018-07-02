const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new CleanWebpackPlugin([ 'dist' ])
  ],
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist/js`
  }
}