import { ClienteModel } from "../models/ClientesModels.js";

import { EmpleadoModel } from "../models/EmpleadosModels.js";


export const iniciarSesion = async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      throw new Error("Completa todos los campos");
    }

    let user;
    let userType;
    // Consulta en la tabla de clientes
    user = await ClienteModel.findOne({ where: { email } });
    if (user) {
      userType = "Cliente";
    }

    // Si no se encuentra el usuario en la tabla de clientes, busca en la tabla de empleados
    if (!user) {
      user = await EmpleadoModel.findOne({ where: { email } });
      if (user) {
        userType = "Empleado";
      }
    }

    if (!user) {
      throw new Error("El usuario no existe");
    }

    if (user.pass !== pass) {
      throw new Error("La contraseña es incorrecta!");
    }

    console.log(user);

    // Redireccionar según el tipo de usuario y su rol
    if (userType === "Empleado") {
      // Usuario Empleado
      if (user.area_trab == "Administracion" && user.cargo == "Jefe") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Empleado-Administracion-Jefe",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab == "Diseño" && user.cargo == "Jefe") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Empleado-Diseño-Jefe",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab == "Diseño" && user.cargo == "Diseñador") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Diseñador",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab == "Taller" && user.cargo == "Jefe") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Jefe Taller",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab == "Taller" && user.cargo == "Obrero") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Obrero",
          status: "Success",
          userId: user.id_empleado,
        });
      } else {
        throw new Error("Error al determinar el rol del empleado");
      }
    } else {
      // Usuario Cliente
      res.json({
        message: "Inicio de sesión exitoso",
        userType: "Cliente",
        status: "Success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
