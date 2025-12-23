import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import bankRoutes from "./routes/bank.routes.js";
import campaignRoutes from "./routes/campaign.routes.js";

const app = express();

/* ================= CORS CONFIG ================= */
app.use(cors());

/* ================ MIDDLEWARES ================== */
app.use(express.json());

/* ================== ROUTES ===================== */
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/campaigns", campaignRoutes);

/* ============== HEALTH CHECK =================== */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
