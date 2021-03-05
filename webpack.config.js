const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        standalone: './src/standalone.js',
        showcase: './src/showcase.js'
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['showcase'],
            template: './src/showcase.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{from: './src/showcase', to: 'showcase'}]
        })
    ]
};
