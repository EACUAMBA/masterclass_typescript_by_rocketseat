import { Request, Response } from "express";
import EmailService from "../service/EmailService";

const utilizadores = [{ nome: "Edilson", email: "edilsoncuamba@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(utilizadores);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        nome: "Edilson Alexandre Cuamba",
        email: "edilsoncuamba@gmail.com",
      },
      message: { subject: "Desafio Spring Rest", body: "Corpo" },
    });
    return res.status(204).json();
  },
};
