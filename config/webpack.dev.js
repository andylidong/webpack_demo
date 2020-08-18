const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    index: 'web.html',
    historyApiFallback: {
      rewrites: [
        { from: /^\/web/, to: '/web.html' },
        { from: /^\/app/, to: '/app.html' },
        { from: /./, to: '/web.html' },
      ]
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig);