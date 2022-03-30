import * as express from 'express';
import {
  getAllMatchsController,
  createMatchsController,
  editProgressMatchController,
} from '../controller/matchs';
import isvalidToken from '../middlewares/isValidToken';

const matchsRouter = express.Router();

matchsRouter.get('/matchs', getAllMatchsController);

matchsRouter.post('/matchs', isvalidToken, createMatchsController);

matchsRouter.patch('/matchs/:id/finish', editProgressMatchController);

export default matchsRouter;
