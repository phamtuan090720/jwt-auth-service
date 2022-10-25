import mongoose from 'mongoose';
import config from '../config';

const url = config.mongoDbUrlCloud;
// const dbUrl = `mongodb://${config['dbName']}:${config['dbPass']}@localhost:6000/jwtAuth?authSource=admin`;
export const db = mongoose.connect(url as string);
const connectDB = async () => {
  try {
    await db;
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    // call lại hàm connect sau 5s khi có lỗi connect
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
