/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { resolve } = require('path');
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")


/**
 * Dev Server;
 * 
 * @type {import('webpack').Configuration}
 */

const serverDevConfiguration = {
	mode: "development",
	target: "web",
	entry: {
		"home_chunk": resolve("./src/chunck.home.ts"),
		"about_chunk": resolve("./src/chunck.about.ts"),
		"blog_chunk": resolve("./src/chunck.blog.ts"),

	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".ts", ".js"],
		plugins: [
			new TsconfigPathsPlugin({
				baseUrl: resolve("./src"),
				configFile: resolve("./tsconfig.json"),
			}),
		],
	},

	plugins: [

		/**
		 * Make multiple instances of the plugin for every html page
		 */
		new htmlWebpackPlugin({
			title: "Home",
			//we dont want to load the template continously
			cache: true,
			//they have to share a common icon

			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.home.html"),
			inject: "body",

			/**
			 * We want this to be the index.html the startup file
			 */

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["home_chunk"]

		}),
		new htmlWebpackPlugin({
			title: "about",
			cache: true,

			//they have to share a common icon
			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.about.html"),
			inject: "body",

			//the generated file in the website
			filename: "about.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["about_chunk"]
		}),
		new htmlWebpackPlugin({
			title: "blogs",
			cache: true,
			//they have to share a common icon

			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.blogs.html"),
			inject: "body",

			//the generated file in the website
			filename: "blogs.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["blog_chunk"]

		}),
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|ttf|svg)/,
				type: "asset",
			},
		],
	},
	devServer: {
		static: resolve("./out"),
		historyApiFallback: true,
		// open: true,
		liveReload: true,
		magicHtml: true
	},

	output: {
		filename: "[name].[contenthash].js",
		path: resolve("./out"),
		clean: true,

	},

	optimization: {
		runtimeChunk: "single",
	},


};

module.exports = serverDevConfiguration;