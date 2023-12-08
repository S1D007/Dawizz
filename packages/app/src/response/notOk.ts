import { Response } from "express"
import { NotOK_ResponseMessage } from "../constants/responseMessages"
import { IErrorMessage } from "../types/response/error.types"
import HTTPStatusCode from "../enums/http/status.enum"
import { dateAndTime } from "../helpers/misc"
const NotOK = (res: Response, entity: IErrorMessage, data: any, status: HTTPStatusCode) => {
    res.status(status).json({
        status: "Not OK",
        data,
        timestamp: dateAndTime(),
        message: NotOK_ResponseMessage[entity],
    })
}

export default NotOK