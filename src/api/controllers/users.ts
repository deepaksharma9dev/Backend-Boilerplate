import { Request, Response ,NextFunction} from "express";
const getCurrentAge = async(req:Request, res:Response, next:NextFunction)=>{
    const dateOfBirth = req.params.doB;
    const currentYear = new Date;
    res.status(200).json({age: `${currentYear.getFullYear() - Number(dateOfBirth)}`});
}

export default getCurrentAge;