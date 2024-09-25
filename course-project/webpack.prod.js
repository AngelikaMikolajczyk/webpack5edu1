const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// const glob = require("glob");
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common');

// const purgePath = {
//     src: path.join(__dirname, "src"),
// }

module.exports = merge(commonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        // wymaga nowsza wersja node żeby działało
        // new CopyPlugin({
        //     patterns: [
        //         {
        //           from: path.resolve(__dirname, "src/assets/images/*").replace(/\\/g, "/"),
        //           to: path.resolve(__dirname, "dist"),
        //           context: "src",
        //         }
        //       ],
        // }),
        new MiniCssExtractPlugin(),
        //takze wymaga nowszej wersji node
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
        //     safelist: ["dummy-css"]
        // })
    ],
});