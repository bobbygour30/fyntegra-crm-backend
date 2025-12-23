import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { sendCampaign } from "../controllers/campaign.controller.js";

const router = express.Router();
router.use(auth);

router.post("/send", sendCampaign);
export default router;
