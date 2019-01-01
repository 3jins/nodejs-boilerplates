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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: path.resolve(__dirname, 'src', 'res'),
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
          plugins: [
            ['transform-object-rest-spread', { useBuiltIns: true }],
            ['transform-runtime', {
              polyfill: false,
              regenerator: true,
            }],
          ],
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
        test: /\.ico$|\.png$|\.jpg$|\.gif$|\.ttf$|\.eot$|\.woff$|\.woff2$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
});
