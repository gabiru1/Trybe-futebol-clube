import * as express from 'express';
import getAllMatchsController from '../controller/matchs';

const matchsRouter = express.Router();

matchsRouter.get('/matchs', getAllMatchsController);

export default matchsRouter;
