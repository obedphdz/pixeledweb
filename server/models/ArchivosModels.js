import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

export const ArchivoModel = db.define("archivo",{
    id_archivo : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_pedido : {type: DataTypes.INTEGER},
    id_tipotrab : {type: DataTypes.INTEGER},
    id_panel : {type: DataTypes.INTEGER},
    material : {type: DataTypes.INTEGER},
    piezas : {type: DataTypes.INTEGER},
    base : {type: DataTypes.FLOAT},
    altura : {type: DataTypes.FLOAT},
    precio_unitario : {type: DataTypes.FLOAT},
    estatus_archivo : {type: DataTypes.CHAR},
    cian : {type: DataTypes.FLOAT},
    magenta : {type: DataTypes.FLOAT},
    yellow : {type: DataTypes.FLOAT},
    black : {type: DataTypes.FLOAT}
})