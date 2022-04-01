import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';
import {
  calcPointsAndVictories, calculateGoals, efficiencyRating,
} from '../helper/calculateGoalsPointsAndVictories';

const getLeaderBoardService = async (club: Clubs, clubName: string) => {
  const teamsMatch = await Matchs.findAll({ where: { homeTeam: club.id, inProgress: 0 } });

  const pointsAndVictoriesObj = calcPointsAndVictories(teamsMatch);
  const totalGoals = calculateGoals(teamsMatch);
  const playedMatches = teamsMatch.length;
  const efficiency = efficiencyRating(pointsAndVictoriesObj.totalPoints, playedMatches);

  const sortedBoard = {
    name: clubName,
    totalPoints: pointsAndVictoriesObj.totalPoints,
    totalGames: playedMatches,
    totalVictories: pointsAndVictoriesObj.victories,
    totalDraws: pointsAndVictoriesObj.draws,
    totalLosses: pointsAndVictoriesObj.losses,
    goalsFavor: totalGoals.favorGoals,
    goalsOwn: totalGoals.ownGoals,
    goalsBalance: totalGoals.goalsBalance,
    efficiency,
  };

  return sortedBoard;
};

export default getLeaderBoardService;
