import { Request, Response } from 'express';
import Clubs from '../database/models/Clubs';
import getLeaderBoardService from '../service/leaderBoard';

const getLeaderBoardController = async (_req: Request, res: Response) => {
  const allClubs = await Clubs.findAll();

  const unorganizedBoard = await Promise.all(allClubs.map((club) => (
    getLeaderBoardService(club, club.clubName)
  )));
  // Os metodos Promise.all e sort foram retirados do repositório do estudante https://github.com/kelnerroberto
  // Que por sua vez retirou de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  // E https://stackoverflow.com/questions/6129952/sort-javascript-array-by-two-numeric-fields
  const sortedBoard = unorganizedBoard.sort((teamA, teamB) => (
    teamB.totalPoints - teamA.totalPoints || teamB.goalsBalance - teamA.goalsBalance
    || teamB.goalsFavor - teamA.goalsFavor || teamA.goalsOwn - teamB.goalsOwn));

  return res.status(200).json(sortedBoard);
};

export default getLeaderBoardController;
