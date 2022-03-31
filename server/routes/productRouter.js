import express from 'express';
import {
  getProduct,
  setProduct,
  getProductById,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getProduct).post(setProduct);
productRouter.route('/product/:id').get(getProductById);

export default productRouter;
