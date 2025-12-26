import express from "express";
import { sendCampaign } from "../controllers/campaign.controller.js";

const router = express.Router();

router.post("/send", sendCampaign);

export default router;