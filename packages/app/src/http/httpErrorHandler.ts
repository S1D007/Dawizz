import { Response } from "express";
import HTTPStatusCode from "../enums/http/status.enum";
import NotOK from "../response/notOk";
import { HttpError } from "./error";
import exceptionChecker from "./httpErrorException";

const errorHandler = (error: any, res: Response) => {
    if (error instanceof HttpError) return NotOK(res, error.type, error.data, error.status);

    if(exceptionChecker(error, res)){
        return;
    };
    
    return NotOK(res, "Internal Server Error", error.message, HTTPStatusCode.InternalServerError);
}

export default errorHandler;