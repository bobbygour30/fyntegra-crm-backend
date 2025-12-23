import Bank from "../models/Bank.js";

export const getBanks = async (req, res) => {
  res.json(await Bank.find());
};
