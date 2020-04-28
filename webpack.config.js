'use strict';

var path = require("path");
var src = path.join (__dirname, "src");
var build = path.join (__dirname, "build", "demo");
//const webpack = require('webpack');

var html_webpack_plugin = require ("html-webpack-plugin");

module.exports =
{
	entry:
	{
		"index": "./src/app.tsx"
	},
	resolve:
	{
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	output:
	{
		path: build,
		filename: "[name].[hash].js"
	},
	plugins:
	[
		new html_webpack_plugin ({ title: "index.html", template: path.join (src, "template.html") })
	],
	module:
	{
		rules:
		[
			{
				test: /\.tsx?$/,
				use: [{loader: "babel-loader"}, {loader: "ts-loader"}]
			},
			{
				test: /\.jsx?$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	}
};
