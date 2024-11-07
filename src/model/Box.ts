import sequelize from "../config/database";
import {DataTypes, Model} from "sequelize";
import User from "./User";

class Box extends Model {
    public id!: number
    public name!: string
    public user_id!: number
}

Box.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Box",
    tableName: "box"
})

Box.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

export default Box