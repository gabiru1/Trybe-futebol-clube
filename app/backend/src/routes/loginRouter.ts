import * as express from 'express';
import verifyUserController from '../controller/login';
import isValidPassword from '../middlewares/isValidPassword';

const loginRouter = express.Router();

loginRouter.post('/login', isValidPassword, verifyUserController);

loginRouter.get('/login/validate');

export default loginRouter;
