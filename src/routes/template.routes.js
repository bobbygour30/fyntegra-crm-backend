// routes/template.routes.js
import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { getTemplates, addTemplate, updateTemplate, deleteTemplate } from "../controllers/template.controller.js";

const router = express.Router();
router.use(auth);

router.get("/", getTemplates);
router.post("/", addTemplate);
router.put("/:id", updateTemplate);
router.delete("/:id", deleteTemplate);

export default router;