import { collection } from '../database/mongodb.js';

const setOrder = async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  await collection.orders.insertOne(req.body);
  console.log(req.body);
  res.status(200).json({});
};

const getOrders = async (req, res) => {
  const orders = await collection.orders.find({}).toArray();
  res.status(200).json(orders);
};

export { setOrder, getOrders };
