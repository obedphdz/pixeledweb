import {
  ClienteModel,
  ContactoModel,
  EmpleadoModel,
} from "../models/SignUpModels.js";

export const registrarCliente = async (req, res) => {
  try {
    const cliente = await ClienteModel.create(req.body);
    const idCliente = cliente.id_cliente;

    await ContactoModel.create({
      id_cliente: idCliente,
      numero: req.body.numero,
    });

    res.json({
      message: "Cliente registrado con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al crear al usuario",
    });
  }
};

export const registrarContacto = async (req, res) => {
  try {
    const contacto = await ContactoModel.create(req.body);
    res.json(contacto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al crear el contacto",
    });
  }
};

export const iniciarSesion = async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      throw new Error("Completa todos los campos");
    }

    let user;
    // Consulta en la tabla de clientes
    user = await ClienteModel.findOne({ where: { email } });

    // Si no se encuentra el usuario en la tabla de clientes, busca en la tabla de empleados
    if (!user) {
      user = await EmpleadoModel.findOne({ where: { email } });
    }

    if (!user) {
      throw new Error("El usuario no existe");
    }

    if (user.pass !== pass) {
      throw new Error("La contraseña es incorrecta!");
    }

    console.log(user);

    // Redireccionar según el tipo de usuario y su rol
    if (user.hasOwnProperty("area_trab") && user.hasOwnProperty("cargo")) {
      // Usuario Empleado
      if (user.area_trab === "Administracion" && user.cargo === "Jefe") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Empleado-Administracion-Jefe",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab === "Diseño" && user.cargo === "Jefe") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Empleado-Diseño-Jefe",
          status: "Success",
          userId: user.id_empleado,
        });
      } else if (user.area_trab === "Diseño" && user.cargo === "Diseñador") {
        res.json({
          message: "Inicio de sesión exitoso",
          userType: "Empleado-Diseño-Diseñador",
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
