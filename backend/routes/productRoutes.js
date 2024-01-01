import exress from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const router = exress.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error('Resource Not Found');
    }
  })
);

export default router;
