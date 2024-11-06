import express, { Request, Response } from "express";

export const App = express();

App.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});