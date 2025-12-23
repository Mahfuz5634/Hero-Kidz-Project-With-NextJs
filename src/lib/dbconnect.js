const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = Process.env.MONGODB_URI;
const dbName=Process.env.DB_Name;

const collection={
    PRODUCTS:"products",
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect=(cname)=>{
    return client.db(dbName).collection(cname);
}