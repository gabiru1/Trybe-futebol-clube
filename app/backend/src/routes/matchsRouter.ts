import * as express from 'express';
import {
  createMatchsController,
  editProgressMatchController,
  getAllMatchsController,
  changeResultMatchController,
} from '../controller/matchs';
import isvalidToken from '../middlewares/isValidToken';

const matchsRouter = express.Router();

matchsRouter.get('/matchs', getAllMatchsController);

matchsRouter.post('/matchs', isvalidToken, createMatchsController);

matchsRouter.patch('/matchs/:id/finish', editProgressMatchController);

matchsRouter.patch('/matchs/:id', changeResultMatchController);

export default matchsRouter;
