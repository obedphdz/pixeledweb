// Importa las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Configura Sequelize con tus credenciales de MySQL
const sequelize = new Sequelize('nombre_bd', 'usuario', 'contrasena', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define el modelo para tu tabla de pedidos
const Pedido = sequelize.define('Pedido', {
  // Define los campos de tu tabla
  nombreCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // ... (otros campos)
});

// Crea una instancia de Express
const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Ruta para recibir y almacenar los datos del pedido
app.post('/api/guardarPedido', async (req, res) => {
  try {
    // Obtén los datos del pedido desde el cuerpo de la solicitud
    const pedidoData = req.body;

    // Crea un nuevo registro en la base de datos
    const nuevoPedido = await Pedido.create(pedidoData);

    // Responde con el nuevo registro creado
    res.status(201).json(nuevoPedido);
  } catch (error) {
    // Maneja errores
    console.error('Error al guardar pedido en la base de datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Puerto en el que escucha el servidor
const PORT = 3001;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
