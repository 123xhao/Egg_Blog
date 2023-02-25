'use strict';

const { Controller } = require('egg');
const timeFormat = require('../tool/timeFormat');
/**
* @Controller 个人信息管理
*/
class UserController extends Controller {
  /**
    * @summary 查询个人信息
    * @description 通过token查询
    * @router get /api/user/userInfo
    * @request body nullRequest *body（DTO）
    * @response 200 baseResponse 查询成功（DTO）
    */
  async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.getUserInfo();
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: {
        id: userInfo.id,
        userName: userInfo.userName,
        phoneNumber: userInfo.phoneNumber,
        nickName: userInfo.nickName,
        createTime: timeFormat(userInfo.createTime),
      },
    };
  }
  /**
    * @summary 修改个人信息
    * @description 修改个人信息
    * @router post /api/user/modify
    * @request body userRequest *body（DTO）
    * @response 200 baseResponse 登录成功（DTO）
    */
  async modify() {
    const { ctx } = this;
    const data = ctx.request.body;
    const userInfo = await ctx.service.user.modify(data);
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: {
        id: userInfo.id,
        userName: userInfo.userName,
        phoneNumber: userInfo.phoneNumber,
        nickName: userInfo.nickName,
        createTime: timeFormat(userInfo.createTime),
      },
    };
  }
}

module.exports = UserController;
