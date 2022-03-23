import express from 'express';
import {
  getProduct,
  setProduct,
  getProductByQuery,
  getProductById,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getProduct).post(setProduct);
productRouter.route('/:query').get(getProductByQuery);
productRouter.route('/product/:id').get(getProductById);
// productRouter.route('/:id').put(updateProduct).delete(deleteProduct);

export default productRouter;
