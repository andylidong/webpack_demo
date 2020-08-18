const { merge } = require('webpack-merge')
const commomConfig = require('./webpack.common')
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
}

module.exports = merge(commomConfig, prodConfig);