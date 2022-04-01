import MatchInterface from '../interfaces/MatchInterface';

const calculateGoals = (teamsMatch: MatchInterface[]) => {
  const favorGoals = teamsMatch.reduce((acc, match) => acc + match.homeTeamGoals, 0);
  const ownGoals = teamsMatch.reduce((acc, match) => acc + match.awayTeamGoals, 0);
  const goalsBalance = favorGoals - ownGoals;

  return { favorGoals, ownGoals, goalsBalance };
};

const calcPointsAndVictories = (teamsMatch: MatchInterface[]) => {
  const victories = teamsMatch.reduce((acc, match) => (
    (match.homeTeamGoals > match.awayTeamGoals) ? acc + 1 : acc
  ), 0);

  const losses = teamsMatch.reduce((acc, match) => (
    (match.homeTeamGoals < match.awayTeamGoals) ? acc + 1 : acc
  ), 0);

  const draws = teamsMatch.reduce((acc, match) => (
    (match.homeTeamGoals === match.awayTeamGoals) ? acc + 1 : acc
  ), 0);

  const totalPoints = (victories * 3) + draws;

  return { victories, losses, draws, totalPoints };
};

const efficiencyRating = (totalPoints: number, matchs: number) => {
  const efficiency = ((totalPoints / (matchs * 3)) * 100).toFixed(2);

  return Number(efficiency); // necessário para retirar 00 depois da vírgula
};

export {
  calculateGoals,
  calcPointsAndVictories,
  efficiencyRating,
};
