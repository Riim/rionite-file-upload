var path = require('path');
var webpack = require('webpack');
var cssVariables = require('postcss-css-variables');
var nested = require('postcss-nested');
var colorFunction = require('postcss-color-function');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');

module.exports = function(env) {
	if (!env) {
		env = {};
	}

	var plugins = [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	return {
		entry: {
			index: './src/index.ts'
		},

		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist'),
			library: '[name]',
			libraryTarget: 'umd'
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /(?:node_modules|bower_components)/,
					enforce: 'pre',
					loader: 'tslint-loader'
				},
				{
					test: /\.ts$/,
					exclude: /(?:node_modules|bower_components)/,
					loader: 'awesome-typescript-loader'
				},
				{
					test: /\.nelm$/,
					loader: ['raw-loader', 'collapse-line-breaks-loader', 'trim-lines-loader']
				},
				{
					test: /\.css$/,
					loader: ['simple-css-loader', {
						loader: 'postcss-loader',
						options: {
							plugins: [
								cssVariables(),
								nested(),
								colorFunction(),
								autoprefixer({ browsers: ['last 3 versions'] }),
								csso({ restructure: false })
							]
						}
					}]
				},
				{
					test: /\.svg$/,
					loader: 'simple-svg-loader'
				}
			]
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		},

		externals: ['cellx', 'cellx-indexed-collections', 'rionite'],

		plugins: plugins,

		watch: env.dev,

		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false,
			setImmediate: false
		}
	};
};
