import { MongoClient } from "mongodb";

const MONGODB_URI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.ly94o.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

const MONGODB_DB = process.env.DATABASE_NAME;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let client = new MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}

export async function getFilteredProducts(findObg) {
  const { client, db } = await connectToDatabase();
  const data = await db.collection("products").find(findObg).toArray();
  const sizeSet = new Set();
  data.forEach((product) => {
    product.availableSizes.forEach((size) => {
      sizeSet.add(size);
    });
  });
  const sizeArray = Array.from(sizeSet).sort();
  return {
    products: JSON.parse(JSON.stringify(data)),
    sizes: sizeArray,
  };
}
