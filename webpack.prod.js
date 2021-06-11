const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: "production",
  devtool: 'inline-source-map',
  entry: {
    standalone: './src/standalone.ts',
    showcase: './src/showcase.ts'
  },
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {test: /\.tsx?$/, loader: "ts-loader"}
  ],

  preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {test: /\.js$/, loader: "source-map-loader"}
  ],
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
      theme_color: '#ffffff',
      inject: true,
      fingerprints: true,
      icons: [
        {
          src: path.resolve('src/showcase/img/logoOriginal.png'),
          sizes: [96, 128, 192, 256, 384, 512] 
        },
        {
          src: path.resolve('src/showcase/img/logoOriginal.png'),
          size: '1024x1024' 
        },
        {
          src: path.resolve('src/showcase/img/logoOriginal.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
};