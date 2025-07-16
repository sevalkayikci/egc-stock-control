import express from 'express';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
const router = express.Router();

router.get('/', getAllProducts);
router.post('/',createProduct);
router.put('/:id',  updateProduct);
router.delete('/:id', deleteProduct);
router.get('/barcode/:barcode', getProductByBarcode);

export default router;
