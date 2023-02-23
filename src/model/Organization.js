import { DataTypes } from "sequelize";
import db from "../util/database.js"
import Menu from "./Menu.js";

const Organization = db.define('organization', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

Organization.hasMany(Menu)

export default Organization;
