var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  cache: true,
  target: 'node',
  entry: {
    react: './app'
  },
  output: { 
    path: path.join(__dirname, "dist"),
    publicPath: "dist/",
    filename: 'app.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};