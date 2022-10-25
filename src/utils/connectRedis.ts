import { createClient } from 'redis';
import config from '../config';

const redisUrl = config.redisUrl;
// const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
  url: redisUrl,
  password: config.redisPassword
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis client connected...');
  } catch (err: any) {
    console.log(err.message);
    // call lại hàm connectRedis sau mỗi 5s khi connect bị lỗi
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;

