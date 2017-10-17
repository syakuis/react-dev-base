/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const prod = require('./webpack.config');

const pkg = require('./package.json');
const { port, publicPath, output, src, entry, filename, externals } = pkg.config;

module.exports = merge(prod, {
  externals, 
  plugins: [
    new CleanWebpackPlugin([output]),
  ],
});
