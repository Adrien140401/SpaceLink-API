import sequelize from "../config/database";
import {DataTypes, Model} from "sequelize";

class Extension  extends Model {
    public id!: number
    public name!: string
    public ext!: string
}

Extension.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ext: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "Extension",
    tableName: "extension"
})

export default Extension