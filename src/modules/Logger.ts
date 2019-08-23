import bunyan from 'bunyan';
import config from 'config';

const streams =
  process.env.NODE_ENV === 'production' && config.logPath
    ? [{ stream: process.stdout }, { path: config.logPath }]
    : [{ stream: process.stdout }];

export default bunyan.createLogger({
  name: config.name,
  streams
});
