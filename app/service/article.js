'use strict';

const { Service } = require('egg');
const moment = require('moment');// npm下载

class ArticleService extends Service {
  async add(params) {
    const { app } = this;
    const data = {
      createTime: new Date(),
      status: '未发布',
      lookNumber: 0,
    };
    try {
      const result = await app.mysql.insert('article', { ...params, ...data });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async delete(id) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      const result = await app.mysql.delete('article', id);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async modify(params) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      await app.mysql.update('article', params);
      const result = await app.mysql.get('article', { id: params.id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async query(params) {
    // 过滤为空的属性
    Object.keys(params).forEach(item => {
      const key = params[item];
      if (key === '' || key === null || key === undefined) {
        delete params[item];
      }
    });
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      const result = await app.mysql.select('article', { where: params });
      result.forEach(item => {
        item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async addHot(id) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { app } = this;
    try {
      const data = await app.mysql.get('article', { id });
      data.hot++;
      await app.mysql.update('article', data);
      const result = await app.mysql.get('article', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = ArticleService;
