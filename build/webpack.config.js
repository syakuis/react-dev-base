// const path = require('path'); // node.js 내장 패키지
const dev = require('../webpack.dev.js');
const prod = require('../webpack.prod.js');

module.exports = (env, args, development) => {
  const newArgs = {
    project: 'main',
    appId: 'app',
    ...args,
  };

  if (development === true) {
    return dev(env, newArgs);
  }

  return prod(env, newArgs);
};
