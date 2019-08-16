const koa = require('../index');

const { router } = koa;

const config = {
  port: 12345
};

router.get('/t1', async ctx => {
  ctx.body = '2135468';
});

koa({ config });
