import { Response } from "express";
import NotOK from "../response/notOk";
import HTTPStatusCode from "../enums/http/status.enum";

const duplicateKeyError = (error: any, res: Response) => {
    if (error.keyValue.email) {
        return NotOK(res, "Account Already Exists", error.keyValue.name, HTTPStatusCode.Conflict)
    } else if (error.keyValue.name) {
        return NotOK(res, "Event Already Exists", error.keyValue.name, HTTPStatusCode.Conflict)
    }

}

const exceptionChecker = (error: any, res: Response) => {
    switch (error.code) {
        case 11000:
            duplicateKeyError(error, res)
            return true;
        default:
            return
    }
}

export default exceptionChecker;