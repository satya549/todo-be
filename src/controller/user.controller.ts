
import { Request, Response } from "express";
import UserModel from "../models/user..model";
import bcrypt from "bcrypt"
const saltRounds = 10;

export const SignUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            throw new Error("provide email and password")
        }
        const user = await UserModel.findOne({email})
        if (user) {
            throw new Error("User alrady axist")
        }

         const hashedpassword = bcrypt.hashSync(password, saltRounds)
         
         await UserModel.create({
            email,
            password:hashedpassword,
         })
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