const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const cssLoaders = (extraLoader) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];

  if(extraLoader) {
    loaders.push(extraLoader);
  }

  return loaders;
}

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    // port: 3008,
    hot: false
  },
  target: 'web',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack App",
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader',
      }
    ]
  }
}
