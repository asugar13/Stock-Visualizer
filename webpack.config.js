const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: ['@babel/polyfill', './src/page_loaders/main.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    compress: true, //compresses what's server into gzip
    hot: true,   //hot reloading
    http2: true,
    proxy: {
      '/': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/api': '' },
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/main.html",
      filename: "./main.html",
      chunks: ['main']
    }),
  ]
};
