import clienteRouter from './cliente.route.js';
import { Router } from 'express';

const routes = Router();

routes.use('/clientes', clienteRouter);

export default routes;