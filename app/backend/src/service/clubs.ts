import Clubs from '../database/models/Clubs';

const getAllClubsService = async () => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

const getClubByIdService = async (id: string) => {
  const clubById = await Clubs.findByPk(id);

  return clubById;
};

export {
  getAllClubsService,
  getClubByIdService,
};
