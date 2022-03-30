import { Request, Response } from 'express';
import getAllMatchsService from '../service/matchs';

const getAllMatchsController = async (_req: Request, res: Response) => {
  const allMatchs = await getAllMatchsService();

  return res.status(200).json(allMatchs);
};

export default getAllMatchsController;
