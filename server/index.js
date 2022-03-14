import express from 'express';
import mongodb from 'mongodb';
import cors from 'cors';

const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');

// Connecting the client to the database
mongoClient.connect();

// Grabbing the woofwoof-api database
const db = mongoClient.db('data-interaction-brief');
// Picking out the collection
const collection = db.collection('products');

const PORT = 8080;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5500',
  })
);

app.get('/products', async (req, res) => {
  const query = req.query;
  console.log('Query', query);
  let filter = {};
  if (query.containsPuppy) {
    filter.containsPuppy = query.containsPuppy === 'true';
  }
  if (query.breed) {
    filter.breed = { $regex: new RegExp(query.breed, 'i') };
  }

  console.log('Filter', filter);
  const dogs = await collection.find(filter).toArray();

  res.json(dogs);
});

app.post('/products', async (req, res) => {
  const dogPic = req.body;

  await collection.insertOne(dogPic);

  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`);
});
