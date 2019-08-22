import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';

import restful from './restful';
import graphql from './graphql';

const app = new Koa();
const router = new Router();

app.use(json());
app.use(logger());
app.use(bodyParser());

/**
 * RESTful API
 */
router.use(restful);

/**
 * Graphql API
 */
graphql.applyMiddleware({ app });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log(`You are listening on port 3000`);
  // console.log(graphql.graphqlPath);
});