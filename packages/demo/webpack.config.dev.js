const dev = require('../../webpack.dev.js');

module.exports = env =>
  dev(env, {
    project: 'demo',
    appId: 'app',
    __dirbase: __dirname,
  });
