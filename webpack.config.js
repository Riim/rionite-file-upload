let path = require('path');
let webpack = require('webpack');
let postcssCSSVariables = require('postcss-css-variables');
let postcssRioniteComponent = require('postcss-rionite-component');
let postcssColorFunction = require('postcss-color-function');
let autoprefixer = require('autoprefixer');
let csso = require('postcss-csso');

module.exports = env => {
	if (!env) {
		env = {};
	}

	let plugins = [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	return {
		mode: 'none',

		entry: {
			index: './src/index.ts'
		},

		output: {
			path: path.join(__dirname, 'dist'),
			filename: '[name].js',
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
					test: /\.rnt$/,
					loader: ['raw-loader', 'trim-lines-loader', 'collapse-line-breaks-loader']
				},
				{
					test: /\.css$/,
					loader: [
						'simple-css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									postcssCSSVariables(),
									postcssRioniteComponent(),
									postcssColorFunction(),
									autoprefixer({ browsers: ['last 3 versions'] }),
									csso({ restructure: false })
								]
							}
						}
					]
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

		externals: [
			'@riim/escape-regexp',
			'@riim/gettext',
			'@riim/next-uid',
			'cellx',
			'reflect-metadata',
			'rionite'
		],

		plugins: plugins,

		watch: env.dev,

		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: false
		}
	};
};
