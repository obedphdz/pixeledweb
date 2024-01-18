import { MaterialesModel } from "../models/MaterialesModels.js";

export const registrarMaterial = async (req, res) => {
  try {
    await MaterialesModel.create(req.body);
    res.json({
      message: "Material registrado con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al registrar el material",
    });
  }
};

export const eliminarMaterial = async (req, res) => {
  try {
    await MaterialesModel.destroy({
      where: { id_material: req.params.id_material },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateMaterial = async (req, res) => {
  try {
    await MaterialesModel.update(req.body, {
      where: { id_material: req.params.id_material },
    });
    res.json({
      message: "¡Material actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getMaterial = async (req, res) => {
  try {
    await MaterialesModel.findAll().then((materiales) => {
      res.json(materiales);
    });
  } catch (error) {
    console.log(error);
  }
};
