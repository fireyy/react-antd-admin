var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');

base.devtool = 'source-map'

// use hash filename to support long-term caching
base.output.filename = '[name].[chunkhash:8].js'
base.output.chunkFilename = '[name].[chunkhash:8].js'
// add webpack plugins
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[chunkhash:8].js',
    minChunks: function (module, count) {
      return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
    }
  })
)

module.exports = base