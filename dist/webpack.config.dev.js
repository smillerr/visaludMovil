"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css|.styl$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html'
  }), new MiniCssExtractPlugin(), new CopyPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src', 'assets/images'),
      to: "assets/images"
    }]
  })]
};