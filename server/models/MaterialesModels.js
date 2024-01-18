import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

export const MaterialesModel = db.define("materiale", {
    id_material:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_mat:{type: DataTypes.STRING},
    preciom2: {type: DataTypes.FLOAT},
}
);