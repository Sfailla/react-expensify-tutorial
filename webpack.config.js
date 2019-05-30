const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}

module.exports = (env, mode) => {
	const isProduction = env === 'production';

	return {
		entry: {
			app: './src/app.js'
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'public', 'dist')
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.s?css$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(gif|png|jpeg)$/i,
					exclude: [ /node_modules/ ],
					loaders: [ 'file-loader', 'image-webpack-loader' ]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				sourceMap: true,
				filename: 'style.css'
			}),
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': JSON.stringify(
					process.env.FIREBASE_API_KEY
				),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
					process.env.FIREBASE_AUTH_DOMAIN
				),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
					process.env.FIREBASE_DATABASE_URL
				),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
					process.env.FIREBASE_PROJECT_ID
				),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
					process.env.FIREBASE_STORAGE_BUCKET
				),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
					process.env.FIREBASE_MESSAGING_SENDER_ID
				)
			})
		],
		resolve: {
			extensions: [ '.js', '.jsx' ]
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			inline: true,
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
