import { Request, Response } from 'express';
import {
  createMatchsService,
  editProgressMatchService,
  getAllMatchsService,
} from '../service/matchs';

const getAllMatchsController = async (_req: Request, res: Response) => {
  const allMatchs = await getAllMatchsService();

  return res.status(200).json(allMatchs);
};

const createMatchsController = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;

  try {
    const newMatch = await createMatchsService({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
    });
    return res.status(201).json(newMatch);
  } catch (error: Error | unknown) {
    if (error instanceof Error) return res.status(401).json({ message: error.message });
  }
};

const editProgressMatchController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const finishMatch = await editProgressMatchService(id);

  return res.status(200).json(finishMatch);
};

export {
  getAllMatchsController,
  createMatchsController,
  editProgressMatchController,
};
