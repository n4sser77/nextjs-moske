import { MongoClient, Db, ServerApiVersion } from 'mongodb';

const uri: any = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client: MongoClient;
let db: Db;

async function dbConnect(): Promise<Db> {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.connect();
    db = client.db();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  return db;
}


export default dbConnect;
