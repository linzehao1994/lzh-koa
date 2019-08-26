process.env['NODE_CONFIG_DIR'] = __dirname + '/config';

import './tsconfig-paths';

import Koa from 'koa';
import Router from 'koa-router';
import { Logger } from '@/modules';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import config from 'config';

import restful from './restful';
import graphql from './graphql';

const app = new Koa();
const router = new Router();
const PORT = config.port || process.env.PORT || 3000;

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

app.listen(PORT, () => {
  Logger.info(
    `You are listening on port ${PORT}, graphql route is ${graphql.graphqlPath}`
  );
});

process.on('uncaughtException', (error: Error) => {
  Logger.fatal(error);
  process.exit();
});

process.on('unhandledRejection', (error: Error) => {
  Logger.error(error);
});
