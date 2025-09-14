import { MongoClient } from 'mongodb';

const uri = 'mongodb://amansapkota14:9810017342aman@cluster0-shard-00-00.<random>.mongodb.net:27017,cluster0-shard-00-01.<random>.mongodb.net:27017,cluster0-shard-00-02.<random>.mongodb.net:27017/university?ssl=true&replicaSet=atlas-<random>-shard-0&authSource=admin&retryWrites=true&w=majority';

async function testConnection() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('university');
    const collections = await db.collections();
    console.log('Collections:', collections.map(c => c.collectionName));
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await client.close();
  }
}

testConnection();

export default testConnection