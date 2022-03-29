import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

const readKey = async (): Promise<string> => {
  const jwtKey: string = await fs.promises.readFile('jwt.evaluation.key', 'utf8');

  return jwtKey;
};

const createToken = async (data: jwt.JwtPayload): Promise<string> => {
  const jwtKey = await readKey();

  const token = jwt.sign(data, jwtKey, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
