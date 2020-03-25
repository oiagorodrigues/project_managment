const path = require('path');
function resolve(path) {
  return path.resolve(__dirname, path);
}

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.[contenthash].js',
    path: resolve('dist')
  }
}
