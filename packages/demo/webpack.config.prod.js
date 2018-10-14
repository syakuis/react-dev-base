const prod = require('../../webpack.prod.js');

module.exports = env =>
  prod(env, {
    project: 'demo',
    appId: 'app',
    __dirbase: __dirname,
  });
