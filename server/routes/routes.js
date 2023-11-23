import express from "express";
import {
  iniciarSesion,
  registrarCliente,
} from "../controllers/SignUpController.js";
const router = express.Router();

router.post("/register", registrarCliente);
router.get("/login", iniciarSesion);
export default router;
