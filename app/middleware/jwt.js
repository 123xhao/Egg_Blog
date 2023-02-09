/*
 * @Autor: LDZ
 * @Date: 2021-12-01 14:19:02
 * @LastEditors: LDZ
 * @LastEditTime: 2022-03-29 15:16:58
 * @FilePath: \vue-admin-templatec:\Users\Barry-LDZ\Desktop\DEMO\egg-courier\app\middleware\jwt.js
 */
'use strict';

module.exports = options => {
  return async function(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode = '';
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);// 验证token
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          msg: 'token已过期，请重新登录！',
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: '没有token',
      };
      return;
    }
  };
};
