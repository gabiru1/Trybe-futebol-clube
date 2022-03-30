import { Request, Response } from 'express';
import { getAllClubsService, getClubByIdService } from '../service/clubs';

const getAllClubsController = async (_req: Request, res: Response) => {
  const allClubs = await getAllClubsService();

  return res.status(200).json(allClubs);
};

const getClubByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const clubById = getClubByIdService(id);

  return res.status(200).json(clubById);
};

export {
  getAllClubsController,
  getClubByIdController,
};
