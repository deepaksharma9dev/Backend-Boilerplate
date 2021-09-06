import { Request, Response, NextFunction } from 'express';
import { any, number } from 'joi';
const getCurrentAge = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dateOfBirth = req.params.doB;
  const currentYear = new Date();
  if((currentYear.getFullYear() - Number(dateOfBirth))<=18){
        return next(new Error('Invalid Input'))
  }
  res
    .status(200)
    .json({ age: `${currentYear.getFullYear() - Number(dateOfBirth)}` });
};

export default getCurrentAge;
