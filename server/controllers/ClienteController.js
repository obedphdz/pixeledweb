import { ClienteModel, ContactoModel } from "../models/ClientesModels.js";

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

export const eliminarCliente = async (req,res) => {
    try {
        await ClienteModel.destroy({
        where: { id_cliente: req.params.id_cliente },
        });
        res.json({
        message: "¡Registro eliminado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateCliente = async (req,res)=>{
    try {
        await ClienteModel.update(req.body, {
            where: { id_cliente: req.params.id_cliente },
        });
        res.json({
            message: "¡Cliente actualizado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}