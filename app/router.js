'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwt = middleware.jwt(app.config.jwt);
  router.get('/', controller.home.index);
  router.post('/api/login', controller.login.login);
  router.get('/api/user/userInfo', jwt, controller.user.info);
  router.post('/api/user/modify', jwt, controller.user.modify);
};
