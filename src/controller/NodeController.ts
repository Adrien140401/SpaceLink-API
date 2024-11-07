import { Request, Response } from "express";

export const addImage = async (req: Request, res: Response) => {
    try {

        const { name, url, boxId } = req.body;

        if (!name || !url || !boxId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        return res.status(201).json({ message: "Image added successfully" });

    }catch (error) {
        console.log('Error adding image:', error);
        return res.status(500).json({ message: "Error adding image" });
    }
}