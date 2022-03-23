import express from 'express';
import { getProduct, setProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.route('/').get(getProduct).post(setProduct);
// productRouter.route('/:id').put(updateProduct).delete(deleteProduct);

export default productRouter;
