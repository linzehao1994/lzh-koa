import Router from 'koa-router';

import OauthRouter from './oauth';

const router = new Router({ prefix: '/api' });

router.use('/oauth', OauthRouter);

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
});

export default router.routes();
