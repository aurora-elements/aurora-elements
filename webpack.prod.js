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
      name: 'aurora-elements',
      short_name: 'aurora',
      description: 'aurora elements showcase',
      background_color: '#ffffff',
      inject: true,
      fingerprints: true,
      icons: [
        {
          src: path.resolve('src/showcase/img/aurora-logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] 
        },
        {
          src: path.resolve('src/showcase/img/aurora-logo.png'),
          size: '1024x1024' 
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
    publicPath: '/'
  },
};