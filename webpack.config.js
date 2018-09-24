const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, mode) => {
	const isProduction = env === 'production';

	return {
		entry: {
			app: './src/app.js'
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								url: false,
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
			})
		],
		resolve: {
			extensions: [ '.js', '.jsx' ]
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			inline: true,
			historyApiFallback: true
		}
	};
};
