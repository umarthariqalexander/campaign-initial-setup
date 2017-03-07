const webpack = require('webpack');
const path = require('path');
// var validate = require('webpack-validator');

const SRC = path.resolve(__dirname, 'src');
const DEST = path.resolve(__dirname, 'dist');


export default {
  debug: true,    // debug start and shows the info on terminal
  devtool: 'inline-source-map',
  noInfo: false,  // all the bundling files info
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  target: 'web',  // for providing browser specific web files
  output: {
    path: DEST, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: SRC
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Hot module reloading
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: SRC, loaders: ['babel']}, // handling js files with babel ES6 to ES5 conversion
      {test: /\.jsx?$/, include: SRC, loaders: ['babel']}, // handling jsx files
      {test: /(\.css|\.scss)$/, loader: 'style!css!sass'}, // Converting SCSS --> CSS files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
