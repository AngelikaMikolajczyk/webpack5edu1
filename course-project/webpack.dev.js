const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        static: "./dist",
        client: {
            overlay: false
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({}),
    ],
});