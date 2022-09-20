import { Router } from "express";
import UserController from './controllers/UtilizadorController';

const routes = Router();

routes.get('/users', (req, res) => {
  return UserController.index(req, res);
})
routes.post('/users/create', UserController.create);

export default routes;