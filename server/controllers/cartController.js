import { collection } from "../database/mongodb.js";

// GET
const getCart = async (req, res) => {
  const cart = await collection;

  res.status(200).json(product);
};

// POST
const setCart = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
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
