import { Request, Response } from 'express';
import getAllClubsService from '../service/clubs';

const getAllClubsController = async (_req: Request, res: Response) => {
  const allClubs = await getAllClubsService();

  return res.status(200).json(allClubs);
};

export default getAllClubsController;
