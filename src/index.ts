import { App } from './app';
import syncModel from "./model/syncModel";
import { Express } from "express";

syncModel().then(() => {
    const hostname = "0.0.0.0";
    const port = 3000;
    const app: Express = App;

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}).catch(error => {
    console.error('Error synchronizing models:', error);
});