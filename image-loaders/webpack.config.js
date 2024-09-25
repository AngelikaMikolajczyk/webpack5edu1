const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: "images/[hash][ext]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader:"style-loader" },
                    { loader:"css-loader", options: { modules: true } },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader:"style-loader" },
                    { loader:"css-loader", options: { modules: true } },
                    { loader:"sass-loader" }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
};