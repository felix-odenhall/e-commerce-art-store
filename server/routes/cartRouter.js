import express from 'express';
import {
  getCart,
  setCart,
  updateCart,
  deleteCart,
} from '../controllers/cartController.js';

const cartRouter = express.Router();

cartRouter.route('/').get(getCart).post(setCart);
cartRouter.route('/:id').put(updateCart).delete(deleteCart);

export default cartRouter;
