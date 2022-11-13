const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins:
        [
            new HtmlWebpackPlugin({
            title: "shelter",
            filename: "index.html",
            template: "./src/index.html"
        }),
            new MiniCssExtractPlugin()
        ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    development ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    }
});