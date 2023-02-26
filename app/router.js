'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwt = middleware.jwt(app.config.jwt);
  router.get('/', controller.home.index);
  // 登陆
  router.post('/api/login', controller.login.login);
  // 用户信息
  router.get('/api/user/userInfo', jwt, controller.user.info);
  router.post('/api/user/modify', jwt, controller.user.modify);
  // 首页
  router.post('/api/homeImg/upload', jwt, controller.homeImg.add);
  router.get('/api/homeImg/query', controller.homeImg.query);
  // 文章
  router.post('/api/article/add', jwt, controller.article.add);
  router.delete('/api/article/delete', jwt, controller.article.delete);
  router.post('/api/article/modify', jwt, controller.article.modify);
  router.get('/api/article/query', controller.article.query);
  router.get('/api/article/hot/:id', controller.article.addHot);
};
