import { collection } from '../database/mongodb.js';

// GET
const getCart = async (req, res) => {
  const cart = await collection;

  res.status(200).json(product);
};

// app.get('/products', async (req, res) => {
//   const query = req.query;
//   console.log('Query', query);
//   let filter = {};
//   if (query.containsPuppy) {
//     filter.containsPuppy = query.containsPuppy === 'true';
//   }
//   if (query.breed) {
//     filter.breed = { $regex: new RegExp(query.breed, 'i') };
//   }

//   console.log('Filter', filter);
//   const dogs = await collection.find(filter).toArray();

//   res.json(dogs);
// });

// POST
const setCart = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set goal' });
};

// PUT
const updateCart = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// DELETE
const deleteCart = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

export { getCart, setCart, updateCart, deleteCart };
