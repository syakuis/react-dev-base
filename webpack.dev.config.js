/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    pathinfo: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
};