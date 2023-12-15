const path = require('path');

module.exports = {
  entry: {
    app: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './src/js/main.js',
  },
};
