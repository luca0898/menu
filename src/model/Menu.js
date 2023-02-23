import { DataTypes } from "sequelize";
import db from "../util/database.js"
import MenuItem from "./MenuItem.js";

const Menu = db.define('menu', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

Menu.hasMany(MenuItem)

export default Menu;
