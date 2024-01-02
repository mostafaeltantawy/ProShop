import exress from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';
const router = exress.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
