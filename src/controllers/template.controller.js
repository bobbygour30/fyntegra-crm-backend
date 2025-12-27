// controllers/template.controller.js
import Template from "../models/Template.js";

export const getTemplates = async (req, res) => {
  const templates = await Template.find({ createdBy: req.user.id });
  res.json(templates);
};

export const addTemplate = async (req, res) => {
  const template = await Template.create({ ...req.body, createdBy: req.user.id });
  res.json(template);
};

export const updateTemplate = async (req, res) => {
  const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(template);
};

export const deleteTemplate = async (req, res) => {
  await Template.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};