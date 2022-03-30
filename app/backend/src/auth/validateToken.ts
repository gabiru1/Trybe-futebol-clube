import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import LoginInterface from '../interfaces/LoginInterface';

const readKey = async (): Promise<string> => {
  const jwtKey: string = await fs.promises.readFile('jwt.evaluation.key', 'utf8');

  return jwtKey;
};

const validateToken = async (token: string): Promise<LoginInterface> => {
  const jwtKey = await readKey();
  const isvalidToken = jwt.verify(token, jwtKey);
  return isvalidToken as LoginInterface;
};

export default validateToken;
