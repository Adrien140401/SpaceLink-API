import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database'

class User extends Model{
    public id!: number
    public name!: string
    public email!: string
    public password!: string
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName: 'User',
    tableName: 'user'
})

export default User