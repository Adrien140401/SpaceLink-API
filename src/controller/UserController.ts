import { Request, Response } from "express";
import User from "../model/User";
import bcrypt from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error("Error creating user:", error);
        console.log(req.body);
        return res.status(500).json({ message: "Error creating user" });
    }
}