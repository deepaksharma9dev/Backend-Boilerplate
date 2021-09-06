import dotenv from 'dotenv';
dotenv.config();
import express, { Application,Request, Response,NextFunction} from 'express';
import sequelize from './db/db';
import UserRouter from './api/routers/Users';
import errorHandler from './errors/errorHandler';

const app: Application = express();
app.use('/api/users', UserRouter);

app.use(errorHandler);


app.listen(process.env.PORT || 6000, async () => {
  console.log('server is running');
  try {
    await sequelize.authenticate();
    console.log('database has connected');
  } catch (err) {
    console.error(err.message);
  }
});
