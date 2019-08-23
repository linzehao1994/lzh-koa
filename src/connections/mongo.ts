import mongoose from 'mongoose';
import { mongo } from 'config';

const URI = mongo.uri || `mongodb://${mongo.host}:${mongo.port}`;

export default mongoose
  .createConnection(
    URI,
    Object.assign(
      {
        useNewUrlParser: true
      },
      mongo.options
    )
  )
  .on('error', (error: Error) => {
    console.log(`MongoConnectError: ${error.message}`);
  });
