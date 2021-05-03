"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* const CopyPlugin = require('copy-webpack-plugin') */


var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var TerserPlugin = require('terser-webpack-plugin');

var Dotenv = require('dotenv-webpack');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {}
  },
  module: {
    rules: [{
      test: /\.(m?js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader' // Needed in React

      }
    }, {
      test: /\.css|.styl$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
    }, {
      test: /\.png/,
      type: 'asset/resource'
    }, {
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: "application/font-woff",
          name: "[name].[contenthash].[ext]",
          outputPath: "./assets/fonts/",
          publicPath: "../assets/fonts/",
          esModule: false
        }
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    /* inject: true, this is not needed since html-loader does this */
    template: './public/index.html',
    filename: './index.html'
  }), new MiniCssExtractPlugin({
    filename: 'assets/[name].[contenthash].css'
  }),
  /* new CopyPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, 'src', 'assets/images'),
              to: "assets/images"
          }
      ]
  }), */
  new Dotenv(), new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  }
};