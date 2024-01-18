import {
  PedidoModel,
  ArchivoModel,
  TipoTrabajoModel,
} from "../models/PedidoModels.js";
import { ClienteModel } from "../models/ClientesModels.js";
import { EmpleadoModel } from "../models/EmpleadosModels.js";
import { Op } from "sequelize";
import Sequelize from "sequelize";

export const crearPedido = async (req, res) => {
  let nombre = req.body.nombre;
  let ape_pat = req.body.ape_pat;
  let ape_mat = req.body.ape_mat;
  let archivos = req.body.archivos;
  let precio_total = req.body.precio_total;
  let fecha_solicitud = req.body.fecha_solicitud;
  let fecha_entrega = req.body.fecha_entrega;
  let fecha_instala = req.body.fecha_instala;
  let estatus = "C";
  let id_cliente;
  let id_vendedor = req.body.id_vendedor;
  let id_disenador = req.body.id_disenador;
  try {
    const clienteEncontrado = await ClienteModel.findOne({
      where: {
        nombre: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("nombre")),
          {
            [Op.like]: nombre ? `%${nombre.toLowerCase()}%` : "%",
          }
        ),
        ape_pat: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("ape_pat")),
          {
            [Op.like]: ape_pat ? `%${ape_pat.toLowerCase()}%` : "%",
          }
        ),
        ape_mat: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("ape_mat")),
          {
            [Op.like]: ape_mat ? `%${ape_mat.toLowerCase()}%` : "%",
          }
        ),
      },
    });

    if (!clienteEncontrado || !clienteEncontrado.nombre) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    } else if (clienteEncontrado) {
      id_cliente = clienteEncontrado.id_cliente;
      const nombreEnMinusculas = clienteEncontrado.nombre.toLowerCase();
      console.log("El cliente es:",nombreEnMinusculas);
      console.log("El id es:",id_cliente);
    } else {
      const nuevoCliente = await ClienteModel.create({
        nombre,
        ape_pat,
        ape_mat,
        email,
      });
      id_cliente = nuevoCliente.id_cliente;
      console.log(id_cliente);
    }
    console.log("El id del vendedor es:", id_vendedor);
    if (!req.body.id_vendedor) {
      return res
        .status(400)
        .json({ mensaje: "Falta el ID del vendedor en la solicitud" });
        
    }

    const vendedorExists = await EmpleadoModel.findOne({
      where: { id_empleado: req.body.id_vendedor },
    });

    if (!vendedorExists) {
      return res.status(404).json({ mensaje: "Vendedor no encontrado" });
    }

    console.log("El id del diseñador es:", id_disenador);

    const nuevoPedido = await PedidoModel.create({
      id_cliente: id_cliente ? clienteEncontrado.id_cliente : id_cliente,
      id_vendedor,
      id_disenador,
      precio_total,
      fecha_solicitud,
      fecha_entrega,
      estatus,
      fecha_instala,
    });

    // Luego, procesamos los archivos asociados al pedido
    const archivosPromises = archivos.map(async (archivo) => {
      const {
        id_material,
        piezas,
        base,
        altura,
        precio_unitario,
        ruta_archivo,
        estatus_archivo = "C",
        trabajo,
        descripcion,
      } = archivo;

      // Creamos cada archivo asociado al pedido
      const nuevoArchivo = await ArchivoModel.create({
        id_pedido: nuevoPedido.id_pedido, // Asociamos el archivo con el nuevo pedido creado
        id_material,
        piezas,
        base,
        altura,
        precio_unitario,
        ruta_archivo,
        estatus_archivo,
      });

      await TipoTrabajoModel.create({
        id_archivo: nuevoArchivo.id_archivo,
        trabajo,
        descripcion,
      });

      return nuevoArchivo;
    });

    // Esperamos a que se creen todos los archivos asociados al pedido
    const archivosCreados = await Promise.all(archivosPromises);

    return res.status(201).json({
      mensaje: "Pedido creado exitosamente",
      pedido: nuevoPedido,
      archivos: archivosCreados,
    });
  } catch (error) {
    console.log(`Error al crear el pedido: ${error}`);
    res.status(500).json({ mensaje: "Error al crear el pedido", error });
  }
};
