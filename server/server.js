
/* server.js */
const express = require("express");
const mysql2 = require('mysql2');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

const connection = mysql2.createConnection({
    host: "192.168.0.17",
    database: "pixeledsys",
    user: "obed",
    password: "pixeled1",
})

app.listen(PORT, () => {
    console.log(`SERVER: http://localhost:${PORT}`);
    connection.connect((err)=>{
        if(err) throw err;
        console.log("Database connected")

    });
});

app.use("/all", (req, res) =>{
    const sqlQuery = `select * from cliente`;
    connection.query(sqlQuery, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.post('/signup', (req, res) => {
    const sqlCliente = `
      INSERT INTO cliente (nombre, ape_pat, ape_mat, email, password, rfc, calle, num_int, num_ext, cp, colonia)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const sqlContacto = `
      INSERT INTO contacto (id_cliente, num_telefono)
      VALUES (?, ?)
    `;
  
    const valuesCliente = [
      req.body.nombre,
      req.body.ape_pat,
      req.body.ape_mat,
      req.body.email,
      req.body.password,
      req.body.rfc || null,
      req.body.calle || null,
      req.body.num_int || null,
      req.body.num_ext || null,
      req.body.codigoPostal || null,
      req.body.colonia || null,
    ];
  
    console.log("Valores insertados en Cliente:", valuesCliente);
  
    connection.beginTransaction((err) => {
      if (err) {
        console.error("Error al iniciar la transacción:", err);
        return res.json("Error al registrar el cliente.");
      }
  
      connection.query(sqlCliente, valuesCliente, (err, resultCliente) => {
        if (err) {
          console.error("Error al insertar en Cliente:", err);
          return connection.rollback(() => res.json("Error al registrar el cliente."));
        }
  
        const idCliente = resultCliente.insertId;
        const valuesContacto = [idCliente, req.body.num_telefono || null];
  
        console.log("Valores insertados en Contacto:", valuesContacto);
  
        connection.query(sqlContacto, valuesContacto, (err, resultContacto) => {
          if (err) {
            console.error("Error al insertar en Contacto:", err);
            return connection.rollback(() => res.json("Error al registrar el cliente."));
          }
  
          connection.commit((err) => {
            if (err) {
              console.error("Error al confirmar la transacción:", err);
              return connection.rollback(() => res.json("Error al registrar el cliente."));
            }
  
            return res.json("Cliente registrado exitosamente.");
          });
        });
      });
    });
  });
  
  


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM cliente WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password]; // Valores para los parámetros de la consulta

    connection.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.json("Error");
        }
        if (data.length > 0) {
            // Si se encontraron resultados, el inicio de sesión es exitoso
            return res.json("Success");
        } else {
            // Si no se encontraron resultados, el inicio de sesión falló
            return res.json("Failed");
        }
    });
});
