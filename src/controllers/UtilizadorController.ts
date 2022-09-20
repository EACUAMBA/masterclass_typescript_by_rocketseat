import { Request, Response } from "express";

const utilizadores = [
  {nome: "Edilson", email: "edilsoncuamba@gmail.com"}
];

export default {
  async index(req: Request, res: Response){
    return res.json(utilizadores);
  }
}