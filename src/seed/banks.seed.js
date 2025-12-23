import mongoose from "mongoose";
import dotenv from "dotenv";
import Bank from "../models/Bank.js";

dotenv.config();

const banks = [
  {
    name: "Bajaj Finserv",
    link:
      "https://oneapp.abfldirect.com/esb/login?dsa_hash=f4f648ab7ce0ac9913236711bd00f4a48612db3467429160d160a8b91857f5f6",
    template: `Hi {{name}}, your Rs. 7,00,000 loan record is now active.

Next: Upload documents

Loan ID:
{{link}}

We’ll notify you once the disbursement is complete.`,
  },

  {
    name: "HDFC Bank",
    link: "https://hdfc.com/loan-login",
    template: `Dear {{name}},

Your HDFC personal loan of Rs. 5,00,000 has been approved.

Complete next steps here:
{{link}}

Thank you for choosing HDFC Bank.`,
  },

  {
    name: "ICICI Bank",
    link: "https://icicibank.com/loan",
    template: `Hello {{name}},

Your ICICI loan application is now active.

Next Step: Upload KYC documents
{{link}}

We’ll keep you updated.`,
  },

  {
    name: "Axis Bank",
    link: "https://axisbank.com/loan",
    template: `Hi {{name}},

Axis Bank loan processing has started for Rs. 6,50,000.

Upload documents here:
{{link}}

Regards,
Axis Bank`,
  },

  {
    name: "Kotak Mahindra Bank",
    link: "https://kotak.com/loan",
    template: `Dear {{name}},

Your Kotak loan is now active.

Loan Portal:
{{link}}

Disbursement will be notified shortly.`,
  },

  {
    name: "IDFC First Bank",
    link: "https://idfcfirstbank.com/loan",
    template: `Hello {{name}},

IDFC First loan of Rs. 4,00,000 is under processing.

Upload documents:
{{link}}`,
  },

  {
    name: "Yes Bank",
    link: "https://yesbank.in/loan",
    template: `Hi {{name}},

Your Yes Bank loan request is approved.

Continue here:
{{link}}`,
  },

  {
    name: "IndusInd Bank",
    link: "https://indusind.com/loan",
    template: `Hello {{name}},

IndusInd Bank loan onboarding started.

Next step:
{{link}}`,
  },

  {
    name: "Punjab National Bank",
    link: "https://pnbindia.in/loan",
    template: `Dear {{name}},

PNB loan of Rs. 3,50,000 sanctioned.

Proceed here:
{{link}}`,
  },

  {
    name: "State Bank of India",
    link: "https://sbi.co.in/loan",
    template: `Hi {{name}},

Your SBI loan application is accepted.

Complete documentation:
{{link}}`,
  },
];

const seedBanks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Bank.deleteMany();
    await Bank.insertMany(banks);
    console.log("Banks seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBanks();
