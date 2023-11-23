import { ClienteModel, ContactoModel } from "../models/SignUpModels.js";

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
      throw new Error("Debes ingresar un correo electrónico y una contraseña.");
    }
    const cliente = await ClienteModel.findOne({ where: { email } });
    if (!cliente) {
      throw new Error("El usuario no existe");
    }
    if (cliente.pass !== pass) {
      throw new Error("La contraseña es incorrecta!");
    }
    res.json({
      message: "Inicio de sesión exitoso",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
