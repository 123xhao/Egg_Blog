'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async getUserInfo(userName) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      const result = await app.mysql.get('user', { userName });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async modify(userName, data) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      await app.mysql.update('user', data);
      const result = await app.mysql.get('user', { userName });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = UserService;
