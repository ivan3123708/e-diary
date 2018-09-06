const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: 'awesome-typescript-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist',
    historyApiFallback: true,
    proxy: [{
      context: ['/auth/*', '/api/*'],
      target: 'http://localhost:5000',
    }],
  },
};
