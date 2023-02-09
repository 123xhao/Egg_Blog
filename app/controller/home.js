'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const res = await service.home.index();
    console.log(res);
    // res返回数据   写入页面
    ctx.body = res;
  }
}

module.exports = HomeController;
