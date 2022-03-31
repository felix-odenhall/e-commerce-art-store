import express from 'express';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';
import cors from 'cors';

const PORT = 8080;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);

app.listen(PORT, () =>
  console.log(`Server is up and running on http://localhost:${PORT}`)
);
