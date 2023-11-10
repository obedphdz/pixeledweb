import { Sequelize } from "sequelize";

const db = new Sequelize("pixeledsys", "obed", "pixeled1", {
  host: "192.168.0.13",
  dialect: "mysql",
});

export default db;
