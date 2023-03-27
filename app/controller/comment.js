'use strict';

const { Controller } = require('egg');
/**
* @Controller 留言管理
*/
class CommentController extends Controller {
  /**
    * @summary 添加留言
    * @description 添加留言
    * @router post /api/article/add
    * @request body articleAddRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async addTypeA() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    await service.comment.addTypeA(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '添加成功',
      data: null,
    };
  }
  /**
    * @summary 添加留言
    * @description 添加留言
    * @router post /api/article/add
    * @request body articleAddRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async addTypeB() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    await service.comment.addTypeB(params);
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
    await service.comment.delete(id);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: null,
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
    const res = await service.comment.query(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '查询成功',
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
  async blogQuery() {
    const { ctx, service } = this;
    const params = ctx.params;
    const res = await service.comment.blogQuery(params);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '查询成功',
      data: res,
    };
  }
}

module.exports = CommentController;
