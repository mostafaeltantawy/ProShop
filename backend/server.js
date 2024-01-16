import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
import connectDb from './config/db.js';
const port = process.env.PORT || 5000;

connectDb(); //connect to mongodb
const app = express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

//set the __dirname to the current directory
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is run on port ${port}`));
