import { Request, Response, NextFunction } from 'express';
import validateToken from '../auth/validateToken';

const isvalidToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    validateToken(token);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default isvalidToken;
