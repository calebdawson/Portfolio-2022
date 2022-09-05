const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const host = process.env.HOST || 'localhost';

process.env.NODE_ENV = 'development';

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ], 
  },
  devServer: {
    static: {
      directory: "./public/index.html",
    },
    compress: true,
    hot: true,
    host,
    port: 3000,
    open: true,
    devMiddleware: {
        publicPath: '/',
    },
  },
  plugins: [
    new HtmlWebpackPlugins({
        inject: true,
        template: resolveAppPath('public/index.html'),
    }),
  ],
}