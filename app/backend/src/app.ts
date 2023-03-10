import * as cors from 'cors';
import * as express from 'express';
import clubsRouter from './routes/clubsRouter';
import loginRouter from './routes/loginRouter';
import matchsRouter from './routes/matchsRouter';
import leaderBoardRouter from './routes/leaderBoardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);

    this.app.use(express.json());

    this.app.use(cors());

    this.app.use('/', loginRouter);

    this.app.use('/', clubsRouter);

    this.app.use('/', matchsRouter);

    this.app.use('/', leaderBoardRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
