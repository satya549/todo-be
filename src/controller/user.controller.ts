import { Request, Response } from "express";
import UserModel from "../models/user..model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET as string;

export const SignUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      throw new Error("provide email and password");
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      throw new Error("User alrady axist");
    }

    const hashedpassword = bcrypt.hashSync(password, saltRounds);

    await UserModel.create({
      email,
      password: hashedpassword,
    });
    res.status(200).json({
      status_code: 200,
      message: " User resistred successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("provide email and password");
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("Incorrect Email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "2d" });

    res.status(200).json({
      message: "User Login successfully",
      data: user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      statusCode: 400,
      message: (error as Error).message,
    });
  }
};
