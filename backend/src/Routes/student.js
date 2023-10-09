import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { StudentModel } from "../models/Student.js";

const router = express.Router();

// Verify the authentication token sent to the current user
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Register student
router.post("/register", async (req, res) => {
  const { name_id, email_id, matricNo, pswd } = req.body;
  const user = await StudentModel.findOne({ matricNo });

  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  }

  const role = 2; // role id for students
  const hashedPassword = await bcrypt.hash(pswd, 10);
  const newUser = await StudentModel({
    matricNo,
    email_id,
    name_id,
    role,
    pswd: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User registered successfully" });
});

// Log in student
router.post("/login", async (req, res) => {
  const { matricNo, pswd } = req.body;
  const user = await StudentModel.findOne({ matricNo });

  if (!user) {
    return res
      .status(404)
      .json({ message: "Invalid matric number (or password)" });
  }

  const isPasswordValid = await bcrypt.compare(pswd, user.pswd);

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "Matric Number or Password is incorrect!" });
  }

  // Generate token using user ID
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({
    message: "login successful",
    token,
    userId: user._id,
    name_id:user.name_id,
    matricNo:user.matricNo,
    email_id:user.email_id,
    role: user.role,
  });
});

// Get student details
router.get("/details", verifyToken, async (req, res) => {
  try {
    const id = req.headers.id;
    const user = await StudentModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { name_id, email_id, matricNo, role } = user;
    return res.json({ name_id, email_id, matricNo, role });
  } catch (error) {
    console.log(error);
  }
});

export { router as studentRouter };
