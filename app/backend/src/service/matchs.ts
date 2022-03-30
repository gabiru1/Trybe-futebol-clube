import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';

const getAllMatchsService = async () => {
  const allMatchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub' },
      { model: Clubs, as: 'awayClub' },
    ],
  });

  return allMatchs;
};

export default getAllMatchsService;
