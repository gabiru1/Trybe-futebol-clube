import { Request, Response } from 'express';
import UserInterface from '../interfaces/UserInterface';
import verifyUserService from '../service/login';
import LoginInterface from '../interfaces/LoginInterface';

const verifyUserController = async (req: Request, res: Response): Promise<UserInterface> => {
  const { email, password } = req.body;

  
};

export default {
  verifyUserController,
};
