'use strict';

const { Controller } = require('egg');
const fs = require('fs');// node自带
const moment = require('moment');// npm下载
const mkdirp = require('mkdirp');// node自带
const path = require('path');// node自带

class HomeImgController extends Controller {
  async add() {
    const { ctx } = this;
    // 需要前往 config/config.default.js 设置 config.multipart 的 mode 属性为 file
    console.log(ctx.request);
    const file = ctx.request.files[0];
    // 声明存放资源的路径
    let uploadDir = '';
    let id = '';
    try {
      // ctx.request.files[0] 表示获取第一个文件，若前端上传多个文件则可以遍历这个数组对象
      const f = fs.readFileSync(file.filepath);
      // 1.获取当前日期
      const day = moment(new Date()).format('YYYYMMDD');
      // 2.创建图片保存的路径
      const dir = path.join(this.config.uploadDir, day);
      const date = Date.now(); // 毫秒数
      await mkdirp(dir); // 不存在就创建目录
      // 返回图片保存的路径
      uploadDir = path.join(dir, date + path.extname(file.filename));
      // decodeURI是为了中文乱码
      id = await ctx.service.homeImg.add({ url: uploadDir, name: decodeURI(file.filename) });
      // 写入文件夹
      fs.writeFileSync(uploadDir, f);
    } catch (e) {
      console.log('error', e);
      // 清除临时文件
      ctx.cleanupRequestFiles();
    }

    ctx.body = {
      code: 200,
      msg: '上传成功',
      data: uploadDir.replace(/app/g, ''),
      id,
    };
  }
  async query() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const { ctx } = this;
    const res = await ctx.service.homeImg.query();
    console.log(res);
    // res返回数据   写入页面
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: res,
    };
  }
}

module.exports = HomeImgController;
