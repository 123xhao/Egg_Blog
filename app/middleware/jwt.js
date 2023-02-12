'use strict';

const whiteList = [ '/login' ];

module.exports = () => {
  return async function(ctx, next) {
    const isInWhiteList = whiteList.some(item => item === ctx.request.url); // 判断接口路径是否在白名单
    if (!isInWhiteList) {
      const token = ctx.request.header.authorization;// 拿到token
      if (token) { // 如果token存在
        const decoded = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret) || 'false';// 解密token
        // console.log("接口操作，token解析结果：", decoded);
        if (decoded !== 'false') {
          await next();
        } else {
          ctx.throw(419, '无效Token');
        }
      } else {
        ctx.throw(403, '无Token');
      }
    } else {
      await next();
    }
  };
};
