//Importamos conexion a base de datos
import { db } from "../database/db.js";

//Importamos Sequalize
import DataTypes from "sequelize";

export const ClienteModel = db.define("cliente", {
  id_cliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING },
  ape_pat: { type: DataTypes.STRING },
  ape_mat: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  pass: { type: DataTypes.STRING },
  rfc: { type: DataTypes.STRING },
  calle: { type: DataTypes.STRING },
  num_int: { type: DataTypes.INTEGER },
  num_ext: { type: DataTypes.INTEGER },
  cp: { type: DataTypes.INTEGER },
  colonia: { type: DataTypes.STRING },
});


export const ContactoModel = db.define("contacto", {
  id_contacto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: ClienteModel,
      key: "id_cliente",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  numero: { type: DataTypes.INTEGER },
});

ClienteModel.hasMany(ContactoModel, { foreignKey: "id_cliente" });
ContactoModel.belongsTo(ClienteModel, { foreignKey: "id_cliente" });
