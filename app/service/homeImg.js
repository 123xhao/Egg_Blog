'use strict';

const Service = require('egg').Service;


// 执行操作
class HomeService extends Service {
  async add(params) {
    try {
      const { app } = this;
      // 存储到数据库
      const result = await app.mysql.insert('home_img', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async query() {
    try {
      const { app } = this;
      // 存储到数据库
      const result = await app.mysql.select('home_img');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = HomeService;
