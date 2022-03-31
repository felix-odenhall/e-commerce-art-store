import express from 'express';
import {
  setOrder,
  getOrders,
  shipOrder,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.route('/:orderId').post(shipOrder);
orderRouter.route('/').get(getOrders).post(setOrder);

export default orderRouter;
