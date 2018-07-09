const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    'bundle': './src/entry.js'
  },
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/dist`
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      path: `${__dirname}/dist`
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      }
    ]
  }
}