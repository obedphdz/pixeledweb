import { db } from "../database/db.js";
import {MaterialesModel} from "./MaterialesModels.js";
import { DataTypes } from "sequelize";

export const PedidoModel = db.define("pedido",{
    id_pedido: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_cliente: {type: DataTypes.INTEGER},
    id_vendedor: {type: DataTypes.INTEGER},
    id_disenador: {type: DataTypes.INTEGER},
    id_archivo: {type: DataTypes.INTEGER},
    precio_total: {type: DataTypes.FLOAT},
    fecha_solicitud: {type: DataTypes.DATE},
    fecha_entrega: {type: DataTypes.DATE},
    estatus: {type: DataTypes.CHAR},
    fecha_instala: {type: DataTypes.DATE}
})

export const TipoTrabajoModel = db.define("tipo_trabajo", {
  id_tipotrab: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_archivo: { type: DataTypes.INTEGER },
  trabajo: { type: DataTypes.CHAR },
  acabados: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.STRING },
});

export const PanelacionModel = db.define("panelacion", {
  id_panel: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  num_panel: { type: DataTypes.INTEGER },
  base_panel: { type: DataTypes.FLOAT },
  altura_panel: { type: DataTypes.FLOAT },
});

export const ArchivoModel = db.define("archivo", {
  id_archivo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_pedido: {
    type: DataTypes.INTEGER,
    references: {
      model: PedidoModel,
      key: "id_pedido",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  id_tipotrab: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoTrabajoModel,
      key: "id_tipotrab",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  id_panel: {
    type: DataTypes.INTEGER,
    references: {
      model: PanelacionModel,
      key: "id_panel",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  id_material: { 
    type: DataTypes.INTEGER,
    references: {
      model: MaterialesModel,
      key: "id_material",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  piezas: { type: DataTypes.INTEGER },
  base: { type: DataTypes.FLOAT },
  altura: { type: DataTypes.FLOAT },
  precio_unitario: { type: DataTypes.FLOAT },
  ruta_archivo: { type: DataTypes.STRING },
  estatus_archivo: { type: DataTypes.CHAR },
  cian: { type: DataTypes.FLOAT },
  magenta: { type: DataTypes.FLOAT },
  yellow: { type: DataTypes.FLOAT },
  black: { type: DataTypes.FLOAT },
});


ArchivoModel.belongsTo(TipoTrabajoModel, { foreignKey: "id_tipotrab" });
TipoTrabajoModel.hasMany(ArchivoModel, { foreignKey: "id_tipotrab" });

PedidoModel.hasMany(ArchivoModel, { foreignKey: "id_pedido" });
ArchivoModel.belongsTo(PedidoModel, { foreignKey: "id_pedido" });

ArchivoModel.hasMany(TipoTrabajoModel, { foreignKey: "id_archivo" });
TipoTrabajoModel.belongsTo(ArchivoModel, { foreignKey: "id_archivo" });

ArchivoModel.hasMany(PanelacionModel, { foreignKey: "id_archivo" });
PanelacionModel.belongsTo(ArchivoModel, { foreignKey: "id_archivo" });

ArchivoModel.hasMany(MaterialesModel, { foreignKey: "id_material" });
MaterialesModel.belongsTo(ArchivoModel, { foreignKey: "id_material" });



