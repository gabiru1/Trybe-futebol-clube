import { compareSync } from 'bcryptjs';
import Users from '../database/models/Users';
import LoginInterface from '../interfaces/LoginInterface';
import UserInterface from '../interfaces/UserInterface';

const verifyUserService = async ({ email, password }: LoginInterface): Promise<UserInterface> => {
  const validUser = await Users.findOne({ where: { email } });

  if (validUser === null) throw new Error('Incorrect email or password');

  if (!email) throw new Error('All fields must be filled');

  if (!password) throw new Error('All fields must be filled');

  const validPassword = compareSync(password, validUser.password);

  if (!validPassword) throw new Error('Incorrect email or password');

  const { id, username, role } = validUser;

  return { id, username, role, email };
};

export default {
  verifyUserService,
};
