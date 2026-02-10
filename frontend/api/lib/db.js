import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
let cached = null;

export async function getDb() {
  if (!uri) throw new Error("MONGODB_URI not set");
  if (cached) return cached;
  const opts = {
    connectTimeoutMS: 20000,
    serverSelectionTimeoutMS: 20000,
    autoSelectFamily: false,
    family: 4,
    tls: true,
    tlsAllowInvalidCertificates: false,
  };
  const client = new MongoClient(uri, opts);
  await client.connect();
  cached = client.db("digitalstricker");
  return cached;
}
