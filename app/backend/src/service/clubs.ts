import Clubs from '../database/models/Clubs';

const getAllClubsService = async () => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

export default getAllClubsService;
