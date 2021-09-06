import express from 'express';
import getCurrentAge from '../controllers/users';
const UserRouter = express.Router();


import asyncHandler from '../../asyncHandler/asyncHandler';
UserRouter.get('/YourAge/:doB', asyncHandler(getCurrentAge));

export default UserRouter;
