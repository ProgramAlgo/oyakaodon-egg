'use strict';

module.exports = appInfo => {
  const config = exports = { keys: '', middleware: [], jwt: {} };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1514191465163_6497';

  // add your config here
  config.middleware = [];

  config.jwt = {
    secret: '123456',
    enable: true, // default is false
    ignore: '/login',
  };

  return config;
};
