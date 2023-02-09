'use strict';

const { Controller } = require('egg');

class LoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const userInfo = await ctx.service.login.login(data);
    if (!userInfo || !userInfo.userName) {
      ctx.body = {
        code: 500,
        msg: '账号不存在',
        success: false,
        data: null,
      };
      return;
    }
    if (userInfo && data.passWord !== userInfo.passWord) {
      ctx.body = {
        code: 500,
        msg: '账号密码错误',
        success: false,
        data: null,
      };
      return;
    }
    // token 生成
    const token = app.jwt.sign(
      {
        userName: userInfo.userName,
      },
      app.config.jwt.secret
    );
    ctx.body = {
      code: 200,
      success: true,
      data: {
        token,
      },
    };
  }
}

module.exports = LoginController;
