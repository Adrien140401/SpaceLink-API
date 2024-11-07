import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import fileRoutes from "./routes/fileRoutes";

export const App = express();

App.use(express.json())

App.use('/user', userRoutes)
App.use('/uploads', express.static('uploads'))

App.use('/files', fileRoutes)
