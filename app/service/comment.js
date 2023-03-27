'use strict';

const { Service } = require('egg');
const moment = require('moment');// npm下载

class CommentService extends Service {
  async addTypeA(params) {
    // 添加留言信息
    const { app } = this;
    const data = {
      createTime: new Date(), // 生成创建时间
      type: 'A',
    };
    try {
      const result = await app.mysql.insert('comment', { ...params, ...data });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async addTypeB(params) {
    // 添加留言信息
    const { app } = this;
    const data = {
      createTime: new Date(), // 生成创建时间
      type: 'B',
    };
    try {
      const result = await app.mysql.insert('comment', { ...params, ...data });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async delete(id) {
    // 删除留言信息
    const { app } = this;
    try {
      const result = await app.mysql.delete('comment', id);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async query(params) {
    // 查询留言信息
    Object.keys(params).forEach(item => {
      const key = params[item];
      if (key === '' || key === null || key === undefined) {
        delete params[item];
      }
    });
    const { app } = this;
    try {
      const result = await app.mysql.select('comment', { where: params });
      result.forEach(item => {
        item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async blogQuery(params) {
    const paramsB = { ...params, type: 'B' };
    params.type = 'A';
    // 查询type为A的留言信息
    Object.keys(params).forEach(item => {
      const key = params[item];
      if (key === '' || key === null || key === undefined) {
        delete params[item];
      }
    });
    // 查询type为B的留言信息
    Object.keys(paramsB).forEach(item => {
      const key = paramsB[item];
      if (key === '' || key === null || key === undefined) {
        delete paramsB[item];
      }
    });
    const { app } = this;
    try {
      const resultA = await app.mysql.select('comment', { where: params });
      const resultB = await app.mysql.select('comment', { where: paramsB });
      for (let index = 0; index < resultA.length; index++) {
        resultA[index].createTime = moment(resultA[index].createTime).format('YYYY-MM-DD HH:mm:ss');
        for (let i = 0; i < resultB.length; i++) {
          resultB[i].createTime = moment(resultB[i].createTime).format('YYYY-MM-DD HH:mm:ss');
          if (resultA[index].id === resultB[i].aId) {
            if (resultA[index].replyData) {
              resultA[index].replyData.push(resultB[i]);
            } else {
              resultA[index].replyData = [];
              resultA[index].replyData.push(resultB[i]);
            }
          }
        }

      }
      return resultA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = CommentService;
