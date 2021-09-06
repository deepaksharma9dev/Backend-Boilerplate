import {ErrorRequestHandler,NextFunction,Response,Request} from 'express';


const errorHandler:ErrorRequestHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err.message ==="Invalid Input"){
        return res.status(400).send(err.message);
    }
}

export default errorHandler;