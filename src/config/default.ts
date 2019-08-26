export const name = '';
export const port = 3000;

export const logPath = __dirname + '/../../log';

export const adminApi = {
  url: 'http://account.linzehao.cn',
  clientId: ''
};

export const mongo = {
  uri: null,
  host: 'localhost',
  port: 27017,
  options: {
    dbName: 'lzh-koa',
    user: null,
    pass: null,
    poolSize: 5
  }
};

export const redis = {
  host: 'localhost',
  port: 6379,
  password: null
};
