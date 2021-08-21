const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    'aurora.elements': './src/standalone.ts',
    showcase: './src/showcase.ts',
    'aurora.modules': './src/modules.ts',
    'aurora.dashboard': './src/dashboard.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
        }],
        exclude: /node_modules/,
      },
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
  plugins: [
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        patterns: [{from: './src/showcase', to: 'showcase'}]
    }),
    new HtmlWebpackPlugin({
        chunks: ['showcase'],
        template: './src/showcase.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/showcase', to: 'showcase'},
      ]
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
};