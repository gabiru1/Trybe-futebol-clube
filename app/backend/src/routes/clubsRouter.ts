import * as express from 'express';
import { getAllClubsController, getClubByIdController } from '../controller/clubs';

const clubsRouter = express.Router();

clubsRouter.get('/clubs', getAllClubsController);

clubsRouter.get('/clubs/:id', getClubByIdController);

export default clubsRouter;
