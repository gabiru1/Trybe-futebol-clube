import { Request, Response } from 'express';
import createToken from '../auth/createToken';
import UserInterface from '../interfaces/UserInterface';
import verifyUserService from '../service/login';

const verifyUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const validUser: UserInterface = await verifyUserService({ email, password });

    const token = await createToken(validUser.username);

    return res.status(200).json({ validUser, token });
  } catch (error: Error | unknown) {
    if (error instanceof Error) return res.status(401).json({ message: error.message });
  }
};

export default verifyUserController;
