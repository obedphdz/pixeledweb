import { db } from "../database/db.js";
import DataTypes from "sequelize";

export const EmpleadoModel = db.define("empleado", {
  id_empleado: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_emp: { type: DataTypes.STRING },
  ape_pat: { type: DataTypes.STRING },
  ape_mat: { type: DataTypes.STRING },
  area_trab: { type: DataTypes.STRING },
  cargo: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  pass: { type: DataTypes.STRING },
});
