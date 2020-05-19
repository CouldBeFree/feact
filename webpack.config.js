const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		overlay: true,
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}