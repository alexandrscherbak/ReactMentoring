const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, options) {
	const isProduction = options.mode === "production";

	const config = {
		context: path.join(__dirname, 'src'),
		entry: './index.js',
		mode: isProduction ? 'production' :'development',
		devtool: isProduction ? 'none' : 'eval-source-map',

		resolve: {
			extensions: ['.js', '.jsx']
		},

		output: {
			path: path.resolve('dist'),
			filename: 'bundle.js'
		},

		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader' }
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				}, {
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'index.html',
				inject: 'body',
				title: 'ReactApp',
			}),
		],
	};

	return config;
}