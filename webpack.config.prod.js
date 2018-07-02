const webpackMerge = require('webpack-merge')
const webpackConfigCommon = require('./webpack.config.common')

module.exports = webpackMerge(webpackConfigCommon, {
  mode: 'production'
})