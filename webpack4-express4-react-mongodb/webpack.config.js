const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: {
    server: path.resolve(__dirname, 'src', 'server.js'),
    client: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  target: 'node',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|(dist)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)|(dist)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$|\.jpg$|\.gif$|\.ttf$|\.eot$|\.woff$|\.woff2$/,
        loader: 'url-loader',
      },
    ],
  },
});