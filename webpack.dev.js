const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
  entry: {
    standalone: './src/standalone.js',
    showcase: './src/showcase.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(json)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    publicPath: '/'
 },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin({ 
        cleanStaleWebpackAssets: false,
        patterns: [{from: './src/showcase', to: 'showcase'}] 
    }),
    new CopyWebpackPlugin({
      patterns: [{from: './src/showcase', to: 'showcase'}]
    }),
    new HtmlWebpackPlugin({
        chunks: ['showcase'],
        template: './src/showcase.html'
    }),
  ],
};