import ClienteController from "../controllers/clienteController.js";
import { Router } from "express";

const clienteRouter = new Router();

clienteRouter.post("/", ClienteController.create)


export default clienteRouter;