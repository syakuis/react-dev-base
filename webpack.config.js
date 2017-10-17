/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 * @site http://syaku.tistory.com
 */
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const prod = require('./webpack.prod.config');

module.exports = merge(base(), prod);
