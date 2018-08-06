const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(woff|ttf|eot|png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'src/assets/images/favicon.png',
      template: 'src/index.html',
    }),
  ],
};
