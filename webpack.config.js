const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: "source-map",
  output: {
    filename: 'myBundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    before: function(dist,server){
      server._watch('./src/*.html')
    },
    
    contentBase: path.join(__dirname, 'src'),
                 hot: true,
                 port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './finished.html',
      template: './src/index.html'
    })
  ]


}