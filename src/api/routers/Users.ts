import express from 'express';
import getCurrentAge from '../controllers/users';
const UserRouter = express.Router();


UserRouter.get('/YourAge/:doB',getCurrentAge)

export default UserRouter;