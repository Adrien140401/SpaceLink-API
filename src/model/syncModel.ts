import sequelize from "../config/database";
import User from "./User";
import Box from "./Box";
import Extension from "./Extension";
import Node from "./Node";

export default function syncModel(): Promise<void> {
    sequelize.sync({ alter: true })
    User.sync();
    Box.sync();
    Extension.sync()
    Node.sync()
    return Promise.resolve()
}