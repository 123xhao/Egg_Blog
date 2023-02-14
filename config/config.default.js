/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  const path = require('path');

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1675500443326_7967';
  config.mysql = {
    // 单数据库信息配置
    client: {
    // host
      host: '192.168.10.130',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Kv123456',
      // 数据库名
      database: 'blog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // 配置cors跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 生产token
  config.jwt = {
    secret: '123456',
  };
  // 配置swagger文档
  config.swagerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };
  // 文件存放路径和文件白名单
  config.uploadDir = 'app/public/img';
  config.multipart = {
    mode: 'file',
    fileSize: 1048576000,
    whitelist: [ '.txt', '.png', '.jpg' ],
  };
  // 文件静态路径
  config.static = {
    prefix: '/app/public', // 访问前缀
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: true,
  };
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
