import express from 'express';
import { setOrder, getOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.route('/').get(getOrders).post(setOrder);

export default orderRouter;
