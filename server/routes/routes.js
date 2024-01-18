import express from "express";
import { iniciarSesion } from "../controllers/SignUpController.js";
import { eliminarCliente, registrarCliente } from "../controllers/ClienteController.js";
import { actualizarEmpleado, eliminarEmpleado, registrarEmpleado } from "../controllers/EmpleadosController.js";
import { eliminarMaterial, getMaterial, registrarMaterial, updateMaterial } from "../controllers/MaterialController.js";
import { crearPedido } from "../controllers/PedidoController.js";
const router = express.Router();
//Inicio de sesión
router.post("/register", registrarCliente);
router.post("/login", iniciarSesion);

//Administrador
router.post("/ad/empleados", registrarEmpleado);
router.delete("/ad/empleados/:id_empleado", eliminarEmpleado);
router.put("/ad/empleados/:id_empleado", actualizarEmpleado);
router.delete("/ad/cliente/:id_cliente", eliminarCliente);
router.get("/ad/cliente/mat", getMaterial);
router.post(("/ad/cliente/mat"), registrarMaterial );
router.delete(("ad/cliente/mat/:id_material"), eliminarMaterial);
router.put(("ad/cliente/mat/:id_material"), updateMaterial);
router.post("/ad/cotiz", crearPedido)



export default router;
