import { Request, Response } from 'express';
import createToken from '../auth/createToken';
import validateToken from '../auth/validateToken';
import UserInterface from '../interfaces/UserInterface';
import { authorizeTokenService, verifyUserService } from '../service/login';

const verifyUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: UserInterface = await verifyUserService({ email, password });

    const token = await createToken({ email });

    return res.status(200).json({ user, token });
  } catch (error: Error | unknown) {
    if (error instanceof Error) return res.status(401).json({ message: error.message });
  }
};

const authorizeTokenController = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  try {
    const { email } = await validateToken(token as string);
    const authorizedToken = await authorizeTokenService({ email });
    return res.status(200).json(authorizedToken);
  } catch (error: Error | unknown) {
    if (error instanceof Error) return res.status(401).json({ message: error.message });
  }
};

export {
  verifyUserController,
  authorizeTokenController,
};
