import { Request, Response } from 'express';

const users = [
  { name: 'André', lastName: 'Rodrigues', email: 'dev-asantos@outlook.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
