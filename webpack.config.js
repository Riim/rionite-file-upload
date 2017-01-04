var path = require('path');
var argv = require('yargs').argv;
var glob = require('glob');
var webpack = require('webpack');
var cssVariables = require('postcss-css-variables');
var nesting = require('postcss-nesting');
var colorFunction = require('postcss-color-function');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');

module.exports = function(env) {
	if (!env) {
		env = {};
	}

	var plugins = [
		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,

				postcss: [
					cssVariables(),
					nesting(),
					colorFunction(),
					autoprefixer({ browsers: ['last 3 versions'] }),
					csso({ restructure: false })
				]
			}
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	return {
		entry: glob.sync('dist/components/*/index.js').reduce(function(entries, p) {
			entries[p.split(path.sep).slice(-2)[0]] = path.join(__dirname, p);
			return entries;
		}, {}),

		output: {
			filename: '[name]/index.js',
			path: path.join(__dirname, 'dist/components'),
			library: '[name]',
			libraryTarget: 'umd'
		},

		module: {
			loaders: [
				{
					test: /\.html$/,
					loader: 'raw-loader!collapse-html-whitespaces-loader'
				},
				{
					test: /\.beml$/,
					loader: 'raw-loader!collapse-line-breaks-loader!trim-lines-loader'
				},
				{
					test: /\.css$/,
					loader: 'simple-css-loader!postcss-loader'
				},
				{
					test: /\.svg$/,
					loader: 'simple-svg-loader'
				}
			]
		},

		externals: ['cellx', 'cellx-indexed-collections', 'rionite'],

		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false,
			setImmediate: false
		},

		plugins: plugins
	};
};
