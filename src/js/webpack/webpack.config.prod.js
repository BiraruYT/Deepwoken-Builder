const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'src/img' },
        { from: 'src/css', to: 'src/css' },
        { from: 'src/js/vendor', to: 'src/js/vendor' },
        { from: 'src/img/icon.png', to: 'src/img/icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'site.webmanifest', to: 'misc/site.webmanifest' },
      ],
    }),
  ],
});
