import { ObjectId } from 'mongodb';
import { collection } from '../database/mongodb.js';

const setUser = async (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  await collection.admin.insertOne(newUser);

  res.status(200).end();
};

const loginUser = async (req, res) => {
  console.log(req.body);
  const loginUser = await collection.admin.findOne({});
  if (
    loginUser.user === req.body.user &&
    loginUser.password === req.body.password
  ) {
    res.status(200).json({ isAuth: true }).end();
  }
  res.status(400).json({ isAuth: false }).end();
};

export { setUser, loginUser };
