// routes/bank.routes.js (update)
import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { getBanks, addBank, updateBank, deleteBank } from "../controllers/bank.controller.js";

const router = express.Router();
router.use(auth);

router.get("/", getBanks);
router.post("/", addBank);
router.put("/:id", updateBank);
router.delete("/:id", deleteBank);

export default router;