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
  const newMatch = await Matchs.create({ ...data });

  return newMatch;
};

const editProgressMatchService = async (id: string) => {
  const finishMatch = await Matchs.update({ inProgress: false }, { where: { id } });

  return finishMatch;
};

export {
  getAllMatchsService,
  createMatchsService,
  editProgressMatchService,
};
