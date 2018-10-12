// const path = require('path'); // node.js 내장 패키지
const prod = require('../webpack.prod.js');

module.exports = env =>
  prod(env, {
    project: 'main',
    appId: 'app',
    // __dirbase: path.resolve(__dirname, ''),
  });
