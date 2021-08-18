import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [
  { name: 'André', lastName: 'Rodrigues', email: 'dev-asantos@outlook.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail(
      {
        name: 'André',
        lastName: 'Rodrigues',
        email: 'dev-asantos@outlook.com',
      },
      {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo',
      },
    );

    return res.send();
  },
};
