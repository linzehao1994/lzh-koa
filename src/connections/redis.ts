import redis from 'redis';
import config from 'config';

export default redis.createClient(config.redis).on('error', (error: Error) => {
  console.log(`RedisConnectError: ${error.message}`);
});
