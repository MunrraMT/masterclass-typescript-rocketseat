import { Request, Response } from 'express';

const users = [{ name: 'Diego', email: 'teste@outlook.com' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
