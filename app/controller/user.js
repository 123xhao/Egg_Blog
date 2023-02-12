'use strict';

const { Controller } = require('egg');
const timeFormat = require('../tool/timeFormat');

class UserController extends Controller {
  // 获取个人信息
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
  // 修改个人信息昵称和手机号
  async modify() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
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
