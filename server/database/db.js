import { Sequelize } from "sequelize";

export const db = new Sequelize('pixeledsys','root','',{
    host: 'localhost',
    dialect: 'mysql'
})