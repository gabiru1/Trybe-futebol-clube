import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';
import MatchInterface from '../interfaces/MatchInterface';

const getAllMatchsService = async () => {
  const allMatchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub' },
      { model: Clubs, as: 'awayClub' },
    ],
  });

  return allMatchs;
};

const createMatchsService = async (data: MatchInterface) => {
  const validHome = Clubs.findOne({ where: { id: data.homeTeam } });
  const validAway = Clubs.findOne({ where: { id: data.awayTeam } });

  if (!validHome || !validAway) throw new Error('There is no team with such id!');

  if (data.homeTeam === data.awayTeam) {
    throw new Error('It is not possible to create a match with two equal teams');
  }

  const newMatch = await Matchs.create({ ...data });

  return newMatch;
};

const editProgressMatchService = async (id: string) => {
  const finishMatch = await Matchs.update({ inProgress: false }, { where: { id } });

  console.log(finishMatch);

  return finishMatch;
};

const getMatchsByProgress = async (inProgress: boolean) => {
  const allMatchs = await Matchs.findAll({
    where: { inProgress },
    include: [
      { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
      { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
    ] });

  return allMatchs;
};

export {
  getAllMatchsService,
  createMatchsService,
  editProgressMatchService,
  getMatchsByProgress,
};
