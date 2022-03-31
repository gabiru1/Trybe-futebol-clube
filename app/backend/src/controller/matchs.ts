import { Request, Response } from 'express';
import {
  createMatchsService,
  editProgressMatchService,
  getAllMatchsService,
  getMatchsByProgress,
} from '../service/matchs';

const getAllMatchsController = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (!inProgress) {
    const allMatchs = await getAllMatchsService();
    return res.status(200).json(allMatchs);
  }

  const allMatchsByProgress = getMatchsByProgress(false);

  return res.status(200).json(allMatchsByProgress);
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

  await editProgressMatchService(id);

  return res.status(200).json({ message: 'ok' });
};

export {
  getAllMatchsController,
  createMatchsController,
  editProgressMatchController,
};
