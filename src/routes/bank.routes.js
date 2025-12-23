import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { getBanks } from "../controllers/bank.controller.js";

const router = express.Router();
router.use(auth);

router.get("/", getBanks);
export default router;
