'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middlewares.jwt(app.config.jwt);
  router.get('/', jwt, controller.render.index);
  router.get('/login', controller.login.index);
  router.get('/success', jwt, controller.success.index);
};
