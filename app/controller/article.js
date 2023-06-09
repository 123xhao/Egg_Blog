'use strict';

const { Controller } = require('egg');
/**
* @Controller 文章管理
*/
class ArticleController extends Controller {
  /**
    * @summary 添加文章
    * @description 添加文章
    * @router post /api/article/add
    * @request body articleAddRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async add() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    await service.article.add(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '添加成功',
      data: null,
    };
  }
  /**
    * @summary 删除文章
    * @description 删除文章
    * @router delete /api/article/delete
    * @request body articleDeleteRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async delete() {
    const { ctx, service } = this;
    const id = ctx.request.query;
    await service.article.delete(id);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: null,
    };
  }
  /**
    * @summary 修改文章
    * @description 修改文章
    * @router post /api/article/modify
    * @request body articleModifyRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async modify() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.article.modify(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '修改成功',
      data: res,
    };
  }
  /**
    * @summary 查询文章
    * @description 查询文章
    * @router get /api/article/query
    * @request body articleQueryRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async query() {
    const { ctx, service } = this;
    const params = ctx.request.query;
    const res = await service.article.query(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data: res,
    };
  }
  /**
    * @summary 增加文章热度
    * @description 增加文章热度
    * @router post /api/article/hot
    * @request body articleAddRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async addHot() {
    const { ctx, service } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
    const data = await service.article.addHot(ctx.params.id);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '热度加一',
      data,
    };
  }
}

module.exports = ArticleController;
