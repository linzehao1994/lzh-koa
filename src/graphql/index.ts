import fs from 'fs';
import { map } from 'lodash';
import read from 'fs-readdir-recursive';
import { ApolloServer } from 'apollo-server-koa';

import resolvers from './resolvers';

const path = __dirname + '/typeDefs/';
const files = read(path);
const typeDefs = map(files, file => {
  return fs.readFileSync(path + file, 'utf8');
}).join('\n');

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
