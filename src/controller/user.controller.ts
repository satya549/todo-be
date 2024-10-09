
import { Request, Response } from "express";
import UserModel from "../models/user..model";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            throw new Error("provide email and password")
        }
        const user = await UserModel.findOne({email})
        if (user) {
            throw new Error("User alrady axist")
        }

    } catch (error) {
        console.error(error);
        res.status(400).json({
            statusCode: 400,
            message: (error as Error).message,
        });
    }
};