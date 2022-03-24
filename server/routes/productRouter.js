import express from 'express';
import {
  getProduct,
  setProduct,
  getProductByQuery,
  getProductById,
  getProductByCategory,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getProduct).post(setProduct); // Keep
// productRouter.route('/:query').get(getProductByQuery);
productRouter.route('/product/:id').get(getProductById); //Remove product
// productRouter.route('/category/:category').get(getProductByCategory);

// productRouter.route('/:id').put(updateProduct).delete(deleteProduct);

export default productRouter;
