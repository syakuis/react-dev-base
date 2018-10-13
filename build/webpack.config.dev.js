// const path = require('path'); // node.js 내장 패키지
const config = require('./webpack.config.js');

module.exports = env => config(env, {}, env.development);
