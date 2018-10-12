// const path = require('path'); // node.js 내장 패키지
const dev = require('../webpack.dev.js');

module.exports = env =>
  dev(env, {
    project: 'main',
    appId: 'app',
    // __dirbase: path.resolve(__dirname, ''),
  });
