'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  async add() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.article.add(params);
    console.log(res);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '添加成功',
      data: null,
    };
  }
  async delete() {
    const { ctx, service } = this;
    const id = ctx.request.query;
    console.log(id);
    const res = await service.article.delete(id);
    console.log(res);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: null,
    };
  }
  async modify() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.article.modify(params);
    console.log(res);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '修改成功',
      data: null,
    };
  }
  async query() {
    const { ctx, service } = this;
    const params = ctx.request.query;
    const res = await service.article.query(params);
    console.log(res);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '修改成功',
      data: res,
    };
  }
}

module.exports = ArticleController;
