import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find({ createdBy: req.user.id });
  res.json(contacts);
};

export const addContact = async (req, res) => {
  const contact = await Contact.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(contact);
};

export const deleteContacts = async (req, res) => {
  await Contact.deleteMany({ _id: { $in: req.body.ids } });
  res.json({ success: true });
};
