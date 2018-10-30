const antdTheme = require('./package.json').theme;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: "./pages",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'pages'),
      components: path.join(__dirname, 'components')
    }
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.schema\.js|canner\.def\.js)$/,
        use: [{
          loader: "canner-schema-loader"
        }, {
          loader: "babel-loader"
        }]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
      }, {
        test: /\.less$/,
        use: [{
          loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: antdTheme,
            javascriptEnabled: true,
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./static/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CopyWebpackPlugin([
      {from: 'static', to: 'static'}
    ])
  ]
};