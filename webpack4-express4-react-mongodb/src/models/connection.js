import mongoose from 'mongoose';
import dbConfig from './database-config';

class Connection {
  constructor() {
    if (!this.instance) this.connectToDB();
    return this.instance;
  }

  connectToDB() {
    // TODO(3jin): Learn about authentication system of MongoDB and add user/pass.
    //  Check here - https://mongoosejs.com/docs/connections.html#options
    const { host, port, database } = dbConfig;
    const uri = `mongodb://${host}:${port}/${database}`;
    mongoose.connect(uri);
    this.instance = mongoose;
  }
}

const connection = new Connection();
export default connection;
