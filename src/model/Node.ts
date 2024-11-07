import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database";
import Box from "./Box";
import Extension from "./Extension";

class Node extends Model {
    public id!: number
    public name!: string
    public box_id!: number
    public extension_id!: number
    public size!: number
    public path!: string
}

Node.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    box_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    extension_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Node",
    tableName: "node"
})

Node.belongsTo(Box, {
    foreignKey: "box_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

Node.belongsTo(Extension, {
    foreignKey: "extension_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

export default Node;