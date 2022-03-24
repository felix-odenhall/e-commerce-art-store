import { ObjectId } from 'mongodb';
import { collection } from '../database/mongodb.js';

// GET
const getProduct = async (req, res) => {
  const product = await collection.products.find().toArray();

  res.status(200).json(product);
};

//GET SEARCH
const getProductByQuery = async (req, res) => {
  const query = req.params.query;
  const product = await collection.products
    .find({ title: { $regex: `${query}`, $options: 'i' } })
    .toArray();

  res.status(200).json(product);
};
//GET PRODUCT BY ID

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await collection.products.findOne({ _id: new ObjectId(id) });
  res.status(200).json(product);
};

//GET PRODUCT BY ID

const getProductByCategory = async (req, res) => {
  const category = req.params.id;
  const product = await collection.products.findOne();
  res.status(200).json(category);
};

// POST
// const setProduct = (req, res) => {
//   if (!req.body.text) {
//     res.status(400);
//     throw new Error('Please add a text field');
//   }
//   res.status(200).json({ message: 'Set goal' });
// };

const setProduct = async (req, res) => {
  const newProduct = req.body;
  const products = await collection.products.find().toArray();
  let productExists = false;

  for (let product of products) {
    if (product.title == newProduct.title && product.image == newProduct.image)
      productExists = true;
  }

  if (!productExists) {
    await collection.products.insertOne(newProduct);

    res.status(200).end();
  } else {
    res.status(400).json({ message: 'Product already exists' }).end();
  }
};

// // PUT
// const updateProduct = (req, res) => {
//   res.status(200).json({ message: `Update goal ${req.params.id}` });
// };

// // DELETE
// const deleteProduct = (req, res) => {
//   res.status(200).json({ message: `Delete goal ${req.params.id}` });
// };

export { getProduct, setProduct, getProductByQuery, getProductById };
