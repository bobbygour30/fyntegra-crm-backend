import Campaign from "../models/Campaign.js";

export const sendCampaign = async (req, res) => {
  const campaign = await Campaign.create({
    ...req.body,
    sentBy: req.user.id
  });

  console.log("SMS SENT:", req.body);
  res.json({ success: true, campaign });
};
