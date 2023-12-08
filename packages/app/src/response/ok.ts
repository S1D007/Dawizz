import { Response } from "express"
import { OK_ResponseMessage } from "../constants/responseMessages"
import { ISuccessMessage } from "../types/response/success.types"
import HTTPStatusCode from "../enums/http/status.enum"
import { dateAndTime } from "../helpers/misc"

const OK = (res: Response, entity: ISuccessMessage, data: any, status: HTTPStatusCode) => {
    res.status(status).json({
        status: "OK",
        data,
        timestamp: dateAndTime(),
        message: OK_ResponseMessage[entity],
    })
}

export default OK