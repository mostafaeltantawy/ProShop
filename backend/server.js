import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.get('/', (req, res) => {
  res.send('API is Running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.send('Couldnon find this product');
  }
});

app.listen(port, () => console.log(`Server is run on port ${port}`));
