/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('./package.json');

const {
  port, publicPath, output, src, entry, filename, externals
} = pkg.config;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin([output]),
  ],
};
