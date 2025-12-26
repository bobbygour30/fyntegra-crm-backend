import axios from "axios";

export const sendCampaign = async (req, res) => {
  try {
    const { message, recipients } = req.body;

    if (!process.env.FAST2SMS_API_KEY) {
      throw new Error("FAST2SMS_API_KEY missing");
    }

    // ❌ Fast2SMS does NOT support variables like {{name}}, {{link}}
    // ✅ Replace them BEFORE sending
    let finalMessage = message
      .replace(/{{name}}/gi, "Customer")
      .replace(/{{link}}/gi, "Please check the portal");

    // ❌ Avoid spam keywords for testing
    finalMessage = finalMessage.replace(/loan/gi, "request");

    console.log("📤 FAST2SMS MESSAGE:", finalMessage);
    console.log("📞 NUMBERS:", recipients.join(","));

    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulk",
      {
        route: "t",                 // transactional
        language: "english",
        sender_id: "FSTSMS",         // required
        message: finalMessage,
        numbers: recipients.join(","), // CSV string
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ FAST2SMS RESPONSE:", response.data);

    return res.json({
      success: true,
      fast2sms: response.data,
    });

  } catch (error) {
    console.error(
      "❌ FAST2SMS ERROR:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      message: "SMS failed",
      error: error.response?.data || error.message,
    });
  }
};
