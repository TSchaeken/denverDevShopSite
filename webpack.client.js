const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack the root file
  // of our server application
  entry: './src/client/index.js',

  // Tell webpack where to put
  // the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePath: path.resolve(__dirname, './src/client/styles/main.scss'),
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
