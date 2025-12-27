// controllers/bank.controller.js
import Bank from "../models/Bank.js";

export const getBanks = async (req, res) => {
  // TEMP FIX: Remove user filter to show seeded banks
  // Later: migrate seeded banks to have createdBy
  const banks = await Bank.find(); // Remove { createdBy: req.user.id }
  res.json(banks);
};

export const addBank = async (req, res) => {
  const bank = await Bank.create({ ...req.body, createdBy: req.user.id });
  res.json(bank);
};

export const updateBank = async (req, res) => {
  const bank = await Bank.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bank);
};

export const deleteBank = async (req, res) => {
  await Bank.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};