'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    * index() {

      // Create Token
      const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);

      this.ctx.body = 'hello admin token = ' + token;
    }
  }
  return LoginController;
};