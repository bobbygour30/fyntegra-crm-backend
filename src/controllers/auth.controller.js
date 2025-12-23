import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    console.log("LOGIN HIT", req.body);

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    console.log("USER FOUND:", !!user);

    if (!user) {
      console.log("CREATING USER");
      user = await User.create({
        email,
        password: await bcrypt.hash(password, 8),
      });
    }

    const ok = await bcrypt.compare(password, user.password);
    console.log("PASSWORD MATCH:", ok);

    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ token });
  } catch (err) {
    console.error("🔥 LOGIN CRASH:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
