const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("User", {
    id:{
        type:DataTypes.INTEGER,
        required:true,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{type:DataTypes.STRING, required:false, unique:false},
    email:{type:DataTypes.STRING, required:true, unique:true},
    password:{type:DataTypes.STRING, required:true},
    activationLink:{type:DataTypes.STRING, allowNull:true},
    isActivated:{type:DataTypes.BOOLEAN, default:false},
});

module.exports = User;