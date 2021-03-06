const path = require("path")
const nodeExternals = require("webpack-node-externals")

const buildPath = path.join(__dirname, "build")
console.log(buildPath)

module.exports = {
	entry: "./reactor/server.js",
	target: "node",
	externals: [nodeExternals()],
	target: "node",
	node: {
		console: true,
		fs: "empty",
		net: "empty",
		tls: "empty",
		__dirname: false,
		__filename: false,
	},
	output: {
		path: buildPath,
		filename: "server.js",
		chunkFilename: "server.js",
		publicPath: "/",
		libraryTarget: "commonjs2",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ["/node_modules/"],
				loaders: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
}
