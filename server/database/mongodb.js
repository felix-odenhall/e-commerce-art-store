import { MongoClient, Db } from 'mongodb';

const mongoClient = new MongoClient('mongodb://localhost:27017');

mongoClient.connect();

const db = mongoClient.db('data-interaction-brief');

export const collection = {
  products: db.collection('products'),
  cart: db.collection('cart'),
  orders: db.collection('orders'),
};
