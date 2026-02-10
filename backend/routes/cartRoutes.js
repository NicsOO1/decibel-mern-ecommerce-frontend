import express from 'express';
import { addToCart, removeFromCart, updateCart } from '../controllers/cartController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(protect)

router.post("/add", addToCart);
router.patch("/update", updateCart);
router.delete("/remove/:productId", removeFromCart);

export default router;
