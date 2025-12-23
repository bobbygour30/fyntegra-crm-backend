import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  getContacts,
  addContact,
  deleteContacts
} from "../controllers/contact.controller.js";

const router = express.Router();
router.use(auth);

router.get("/", getContacts);
router.post("/", addContact);
router.post("/delete", deleteContacts);

export default router;
