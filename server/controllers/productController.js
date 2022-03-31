import { ObjectId } from 'mongodb';
import { collection } from '../database/mongodb.js';

// GET
const getProduct = async (req, res) => {
  const query = req.query;
  let filter = {};
  if (query.title) {
    filter.title = { $regex: new RegExp(query.title, 'i') };
  }
  if (query.category) {
    filter.category = { $regex: new RegExp(query.category, 'i') };
  }
  console.log('Categories Filter', query.category);
  const product = await collection.products.find(filter).toArray();
  res.status(200).json(product);
};

//GET SEARCH
const getProductByQuery = async (req, res) => {
  const query = req.params.query;
  const product = await collection.products
    .find({ title: { $regex: `${query}`, $options: 'i' } })
    .toArray();
  console.log(product);
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
  const category = req.params.category;
  console.log(category);
  const products = await collection.products
    .find({ category: `${category}` })
    .toArray();
  res.status(200).json(products);
};

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

export {
  getProduct,
  setProduct,
  getProductByQuery,
  getProductById,
  getProductByCategory,
};
