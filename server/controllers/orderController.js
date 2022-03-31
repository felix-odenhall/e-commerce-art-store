import { ObjectId } from 'mongodb';
import { collection } from '../database/mongodb.js';

const setOrder = async (req, res) => {
  if (!req.body) {
    res.status(400);
  }
  await collection.orders.insertOne(req.body);
  console.log(req.body);
  res.status(200).json({});
};

const getOrders = async (req, res) => {
  const orders = await collection.orders.find({}).toArray();
  res.status(200).json(orders);
};

const shipOrder = async (req, res) => {
  const orderId = req.params.orderId;
  console.log(orderId);
  await collection.orders.updateOne(
    { _id: new ObjectId(orderId) },
    { $set: { isShipped: true } }
  );
  res.status(200).json({});
};

export { setOrder, getOrders, shipOrder };
