import express from 'express';
import mongodb from 'mongodb';

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

app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`);
});
