import { NextFunction, Request, Response } from 'express';

const isValidPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) return res.status(401).json({ message: 'All fields must be filled' });

  if (password.length < 6) return res.status(401).json({ message: 'Incorrect email or password' });

  next();
};

export default isValidPassword;
