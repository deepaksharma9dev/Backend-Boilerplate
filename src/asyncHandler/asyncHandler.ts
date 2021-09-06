import { Request,Response,NextFunction } from "express";
const asyncHandler = (fn:any)=> {
    return function(req:Request,res:Response,next:NextFunction){
        return Promise.resolve(fn(req,res,next)).catch(next)
    }
}
export default asyncHandler;    