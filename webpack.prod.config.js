const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
        publicPath: "/"
    },
    mode: "production",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        port: 1995
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src/views/index.html"),
                filename: "index.html"
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: "dist.css"
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.png$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets",
                    publicPath: "assets"
                }
            }
        ]
    }
};
