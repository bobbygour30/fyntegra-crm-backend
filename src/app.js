import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import bankRoutes from "./routes/bank.routes.js";
import campaignRoutes from "./routes/campaign.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fyntegra-crm.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// IMPORTANT: respond to preflight immediately
app.options("*", cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/campaigns", campaignRoutes);

app.get("/", (req, res) => res.send("Fyntegra CRM Backend"));
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "Fyntegra CRM Backend" });
});

export default app;
