const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.production ? 'production' : 'development';
const isProd = mode === 'production';

module.exports = {
	entry: {
		index: './src/index.tsx'
	},
	mode,
	devtool: isProd ? 'source-map' : 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: { noEmit: false }
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							url: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: 'public/**/*',
					to: './',
					globOptions: {
						dot: true,
						gitignore: true,
						ignore: []
					}
				},
				{
					from: 'manifest.json',
					to: './'
				}
			]
		}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			minify: isProd
		}),
		new ESLintPlugin()
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		clean: true
	}
};
