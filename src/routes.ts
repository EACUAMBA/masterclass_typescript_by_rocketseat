import { Router } from "express";
import UserController from './controllers/UtilizadorController';

const routes = Router();

routes.get('/users', (req, res) => {
  return UserController.index(req, res);
})

export default routes;