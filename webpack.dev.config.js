var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');

base.devtool = 'eval-source-map';
base.entry.unshift('webpack-hot-middleware/client');
base.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
);

module.exports = base
