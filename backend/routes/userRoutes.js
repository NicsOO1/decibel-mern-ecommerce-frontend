import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { limiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", limiter, loginUser);
router.post("/logout", logoutUser);

export default router;
