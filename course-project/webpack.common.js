const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            moment: "moment",
            $: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html'),
            chunks: ['index'],
            inject: true,
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/courses.html'),
            chunks: ['courses'],
            inject: true,
            filename: 'courses.html',
            base: "pages"
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};