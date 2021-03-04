const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        standalone: './src/standalone.js',
        showcase: './src/showcase.js'
    },
    output: {
        publicPath: '/dist/'
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
        })
    ]
};
