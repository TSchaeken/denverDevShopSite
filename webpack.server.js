const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const StatsPlugin = require('stats-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we are building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file
  // of our server application
  entry: './server/index.js',

  // Tell webpack where to put
  // the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'isomorphic-style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                // sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    // new OptimizeCssAssetsPlugin({
    //   cssProcessorOptions: { discardComments: { removeAll: true } },
    // }),
    // new StatsPlugin('stats.json', {
    //   chunkModules: true,
    //   modules: true,
    //   chunks: true,
    //   exclude: [/node_modules[\\/]react/],
    // }),
  ],
};

module.exports = merge(baseConfig, config);
