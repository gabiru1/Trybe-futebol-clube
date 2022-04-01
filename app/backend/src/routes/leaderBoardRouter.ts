import * as express from 'express';
import getLeaderBoardController from '../controller/leaderBoard';

const leaderBoardRouter = express.Router();

leaderBoardRouter.get('/leaderboard/home', getLeaderBoardController);

export default leaderBoardRouter;
