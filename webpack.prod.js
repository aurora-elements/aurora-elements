const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    'aurora.elements': './elements.js',
    'ae.dashlet.number': './src/elements/dashboard/number.dashlet.element.ts',
    'ae.accordion': './src/elements/accordion/accordion.element.ts',
    'ae.tabs': './src/elements/tabs/tabs.element.ts',
    'ae.card': './src/elements/card.element.ts'
  },
  module: {
    rules: [
      { test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader'
        ] 
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        type: 'asset/resource'
      },
      {
        test: /\.(json)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
};