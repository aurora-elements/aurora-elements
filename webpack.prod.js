const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    'aurora.elements': './src/elements.ts',
    'showcase': './src/showcase.ts',
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
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        patterns: [{
          from: './src/showcase', 
          to: 'showcase'
        }]
    }),
    new HtmlWebpackPlugin({
        chunks: ['showcase'],
        filename: 'showcase.html',
        title: 'aurora-elements',
        minify: true,
        hash: true,
        inject: false,
        templateContent: ({htmlWebpackPlugin}) => `
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="description" content="Showcase for aurora-elements">
              <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
              <meta name="theme-color" content="#004d40">
              <meta name="apple-mobile-web-app-capable" content="yes">
              <meta name="apple-mobile-web-app-status-bar-style" content="black">
              <meta name="apple-mobile-web-app-title" content="aurora-elements">
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
              <link href="showcase/assets/styles.css" rel="stylesheet" />
              <noscript>Please enable JavaScript to continue using this application.</noscript>
              <title>${htmlWebpackPlugin.options.title}</title>
              ${htmlWebpackPlugin.tags.headTags}
              </head>
            <body>
              <ae-showcase></ae-showcase>
              ${htmlWebpackPlugin.tags.bodyTags}
            </body>
          </html>
        `
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/showcase', to: 'showcase'},
      ]
    }),
    new MiniCssExtractPlugin({ 
      filename: './src/showcase/assets/styles.css' 
    }),
    new MiniCssExtractPlugin({ 
      filename: './src/showcase/assets/prism.css' 
    })
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