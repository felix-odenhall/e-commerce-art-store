import { MongoClient, Db } from 'mongodb';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const mongoClient = new MongoClient(MONGODB_URL);

mongoClient.connect();

const db = mongoClient.db('data-interaction-brief');

export const collection = {
  products: db.collection('products'),
  cart: db.collection('cart'),
  orders: db.collection('orders'),
  admin: db.collection('admin'),
};
