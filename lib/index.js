const Koa = require('koa');
const router = require('koa-router')();
const logger = require('koa-logger');
const bodyParser = require('koa-body');

const app = new Koa();

module.exports = ({ config }, options = {}) => {
  const PORT = config.port || process.env.PORT || 3000;

  if (options.logger) {
    app.use(logger());
  }

  app.use(bodyParser(options.bodyParser));

  app.use(router.routes());

  /**
   * Handle 404
   */
  app.use(async ctx => {
    ctx.status = 404;

    switch (ctx.accepts('html', 'json')) {
      case 'html':
        ctx.type = 'html';
        ctx.body = '<p>Page Not Found</p>';
        break;

      case 'json':
        ctx.body = {
          message: 'Page Not Found'
        };
        break;

      default:
        ctx.type = 'text';
        ctx.body = 'Page Not Found';
        break;
    }
  });

  /**
   * Handle Error
   */
  app.on('error', (error, ctx) => {
    if (options.errorHandle) return options.errorHandle(error, ctx);
    console.log(error);
  });

  app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
  });
};

module.exports.app = app;
module.exports.router = router;
