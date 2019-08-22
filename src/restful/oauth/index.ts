import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello oauth!' };
  await next();
});

export default router.routes();
