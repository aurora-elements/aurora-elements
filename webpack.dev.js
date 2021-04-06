const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  devtool: "inline-source-map",
  plugins: [
   /* new CleanWebpackPlugin({ 
        cleanStaleWebpackAssets: false,
        patterns: [{from: './src/showcase', to: 'showcase'}] 
    }),*/
    new HtmlWebpackPlugin({
        chunks: ['showcase'],
        template: './src/showcase.html'
    }),
  ],
};