
/* server.js */
const express = require("express");
const mysql2 = require('mysql2');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const connection = mysql2.createConnection({
    host: "192.168.1.115",
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
  
        /* Insercion a tabla cliente  */
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
    const email = req.body.email;
    const password = req.body.password;

    // Primero, verifica si las credenciales coinciden con un "Cliente"
    const sqlCliente = "SELECT * FROM cliente WHERE email = ? AND password = ?";
    connection.query(sqlCliente, [email, password], (err, dataCliente) => {
        if (err) {
            console.error("Error:", err);
            return res.json("Error");
        }
        if (dataCliente.length > 0) {
            // Si se encontraron resultados en la tabla "Cliente", el inicio de sesión es exitoso
            return res.json({ status: "Success", user: dataCliente[0], userType: "Cliente" });
        } else {
            // Si no se encontraron resultados en la tabla "Cliente", verifica en la tabla "Empleado"
            const sqlEmpleado = "SELECT * FROM empleado WHERE correo_emp = ? AND password_emp = ?";
            connection.query(sqlEmpleado, [email, password], (err, dataEmpleado) => {
                if (err) {
                    console.error("Error:", err);
                    return res.json("Error");
                }
                if (dataEmpleado.length > 0) {
                    // Si se encontraron resultados en la tabla "Empleado", el inicio de sesión es exitoso
                    return res.json({ status: "Success", user: dataEmpleado[0], userType: "Empleado" });
                } else {
                    // Si no se encontraron resultados en ninguna de las tablas, el inicio de sesión falló
                    return res.json("Failed");
                }
            });
        }
    });
});


app.post('/orders', (req, res) => {

  const sqlCliente = `
      INSERT INTO cliente (precio_total, fecha_solicitud, fecha_entrega, estatus, fecha_instala, firma_cliente)
      VALUES (?, ?, ?, ?, ?, ?)
    `; 
});