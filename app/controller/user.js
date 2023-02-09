'use strict';

const { Controller } = require('egg');
const timeFormat = require('../tool/timeFormat');

class UserController extends Controller {
  // 获取个人信息
  async info() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    // 通过 token 带过来的 username 获取到个人信息
    const userInfo = await ctx.service.user.getUserInfo(decode.userName);
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
  // 修改个人信息昵称和手机号
  async modify() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    const data = ctx.request.body;
    // 通过 token 带过来的 username 获取到个人信息
    const userInfo = await ctx.service.user.modify(decode.userName, data);
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
