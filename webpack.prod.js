const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: "production",
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
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5*1024*1024,
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      inject: true,
      fingerprints: true,
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/showcase/img/aurora-logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/showcase/img/aurora-logo.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/showcase/img/aurora-logo.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};