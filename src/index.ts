import {Express} from "express";
import {App} from "./app";

const hostname = "0.0.0.0"
const port = 3000
const app: Express = App

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});