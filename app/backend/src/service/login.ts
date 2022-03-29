import { compareSync } from 'bcryptjs';
import Users from '../database/models/Users';
import LoginInterface from '../interfaces/LoginInterface';
import UserInterface from '../interfaces/UserInterface';

const messageFilled = 'All fields must be filled';
const messageIncorrect = 'Incorrect email or password';

const verifyUserService = async ({ email, password }: LoginInterface): Promise<UserInterface> => {
  if (!email) throw new Error(messageFilled);

  if (!password) throw new Error(messageFilled);

  const validUser = await Users.findOne({ where: { email } });

  if (validUser === null) throw new Error(messageIncorrect);

  const validPassword = compareSync(password, validUser.password);

  if (!validPassword) throw new Error(messageIncorrect);

  const { id, username, role } = validUser;

  return { id, username, role, email };
};

export default verifyUserService;
