const path = require('path')
const merge = require('webpack-merge')
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: false,
    inline: true,
    host: '0.0.0.0',
    contentBase: './',
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new DefinePlugin({}),
    new HotModuleReplacementPlugin(),
  ],
})
