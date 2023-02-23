import { DataTypes } from "sequelize";
import db from "../util/database.js"

const MenuItem = db.define('menu_item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    },
    image_src: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default MenuItem;
