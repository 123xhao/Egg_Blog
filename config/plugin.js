'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 配置跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 生成token
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  }
};
