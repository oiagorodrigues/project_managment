const path = require('path');
function resolve(_path) {
  return path.resolve(__dirname, _path);
}

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
