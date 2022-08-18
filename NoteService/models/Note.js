const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Note = sequelize.define("Note", {
    id: {
        type: DataTypes.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: { type: DataTypes.INTEGER, required: true, unique: false },
    title: { type: DataTypes.STRING, required: true, unique: false },
    text: { type: DataTypes.STRING, required: true, unique: false },
});

module.exports = Note;