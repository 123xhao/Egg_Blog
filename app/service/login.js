'use strict';

const { Service } = require('egg');

class LoginService extends Service {
  async login(params) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      const result = await app.mysql.get('user', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = LoginService;
