import * as express from 'express';
import verifyUserController from '../controller/login';

const loginRouter = express.Router();

loginRouter.post('/login', verifyUserController);

export default loginRouter;
