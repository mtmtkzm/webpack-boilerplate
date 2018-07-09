const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: {
    'bundle': './src/entry.js'
  },
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/dist`
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      path: `${__dirname}/dist`
    }),
    new StyleLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
}