import * as express from 'express';
import getAllClubsController from '../controller/clubs';

const clubsRouter = express.Router();

clubsRouter.get('/clubs', getAllClubsController);

export default clubsRouter;
