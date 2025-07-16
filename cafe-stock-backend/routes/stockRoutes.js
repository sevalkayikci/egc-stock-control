import express from 'express';
import {
  getAllStockMovements,
  createStockMovement
} from '../controllers/stockMovementController.js';

const router = express.Router();

router.get('/', getAllStockMovements);
router.post('/', createStockMovement);

export default router;
