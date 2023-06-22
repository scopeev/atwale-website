/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



// /**
//  * Dev Server;
//  * 
//  * @type {import('webpack').Configuration}
//  */


const path = require('path');
const { resolve } = require('path');
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
	mode: "production",
	target: "web",
	entry: {
		"home_chunk": resolve("./src/chunck.home.ts"),
		"about_chunk": resolve("./src/chunck.about.ts"),
		"blog_chunk": resolve("./src/chunck.blog.ts"),
		"events_chunk": resolve("./src/chunck.events.ts"),
		"team_chunk": resolve("./src/chunck.team.ts"),
		"contact_chunk": resolve("./src/chunck.contact.ts"),


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
			filename: "blog.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["blog_chunk"]

		}),

		new htmlWebpackPlugin({
			cache: true,
			//they have to share a common icon

			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.events.html"),
			inject: "body",

			//the generated file in the website
			filename: "events.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["events_chunk"]

		}),

		new htmlWebpackPlugin({
			title: "team",
			cache: true,
			//they have to share a common icon

			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.team.html"),
			inject: "body",

			//the generated file in the website
			filename: "team.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["team_chunk"]

		}),

		new htmlWebpackPlugin({
			title: "contact",
			cache: true,
			//they have to share a common icon

			favicon: resolve("./resources/favicon.ico"),
			template: resolve("./src/views/view.contact.html"),
			inject: "body",

			//the generated file in the website
			filename: "contact.html",

			/**
			 * This is where we specify individual controllers for every html page
			 */


			chunks: ["contact_chunk"]

		}),

		new CopyPlugin({
			patterns: [
				{
					from: resolve("./resources/css"), to: resolve("./out/css")

				},
				{
					from: resolve("./resources/img"), to: resolve("./out/img")

				},
				{
					from: resolve("./resources/js"), to: resolve("./out/js")

				},
				{
					from: resolve("./resources/lib"), to: resolve("./out/lib")

				}
			]
		})
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
		open: true,
		liveReload: true,
		magicHtml: true,

	},


	output: {
		filename: "controllers/[name].[contenthash].js",
		path: resolve("./out"),
		clean: true,
	},

	optimization: {
		runtimeChunk: "single",
	},
}
