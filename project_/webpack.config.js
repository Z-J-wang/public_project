var webpack = require('webpack');

module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test:/\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
	　　　　　　loader: 'url-loader?limit=8192'
			}
		]
	}
}
