import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
import connectDb from './config/db.js';
const port = process.env.PORT || 5000;

connectDb(); //connect to mongodb
const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is run on port ${port}`));
