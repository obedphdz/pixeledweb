import { EmpleadoModel } from "../models/EmpleadosModels.js";

export const registrarEmpleado = async (req, res) => {
  try {
    await EmpleadoModel.create(req.body);
    res.json({
      message: "Empleado registrado con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al registrar al empleado",
    });
  }
};

export const eliminarEmpleado = async (req, res) => {
  try {
    await EmpleadoModel.destroy({
      where: { id_empleado: req.params.id_empleado },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const actualizarEmpleado = async (req, res) => {
  try {
    await EmpleadoModel.update(req.body, {
      where: { id_empleado: req.params.id_empleado },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
