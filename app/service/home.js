'use strict';

const Service = require('egg').Service;


// 执行操作
class HomeService extends Service {
  async index() {
    return { ok: 1 };
  }
}

module.exports = HomeService;
