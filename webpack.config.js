const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const optimization = () => {
	const config = {
		minimize: false,
		splitChunks: {
			chunks: "all"
		}
	};

	if (isProd) {
		config.minimize = true;
		config.minimizer = [ new TerserPlugin(), new CssMinimizerWebpackPlugin() ]
	}

	return config;
}

const languageLoaders = (lang) => {
//
}

const cssLoaders = (extraLoader) => {
	const loaders = [ MiniCssExtractPlugin.loader, 'css-loader' ];

	if (extraLoader) {
		loaders.push(extraLoader);
	}

	return loaders;
};

console.log('mode', process.env.NODE_ENV)

module.exports = {
	mode: process.env.NODE_ENV,
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './index.js',
		analytics: './analytics.ts'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		open: true,
		// port: 3008,
		hot: !!isDev
	},
	target: 'web',
	optimization: optimization(),
	devtool: isDev ? 'source-map' : undefined,
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.json' ],
		alias: {
			src: path.resolve(__dirname, 'src'),
			assets: path.resolve(__dirname, 'src/assets'),
			styles: path.resolve(__dirname, 'src/styles')
		}
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "Webpack App",
			template: './index.html',
			minify: !isDev
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
				use: cssLoaders("sass-loader")
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				type: "asset/resource"
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader'
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.m?ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [ '@babel/preset-env', "@babel/preset-typescript" ]
					}
				}
			},
		]
	}
}
