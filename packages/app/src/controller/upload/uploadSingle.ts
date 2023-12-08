import { Request, Response } from "express";
import { _login } from "../../services/auth.service";
import OK from "../../response/ok";
import HTTPStatusCode from "../../enums/http/status.enum";
import errorHandler from "../../http/httpErrorHandler";
import { _create } from "../../services/event.service";
import NotOK from "../../response/notOk";
import { upload_single_image } from "../../services/aws.service";

async function UploadSingle(req: Request & {
    id?: string;
}, res: Response) {
    try {
        const file = req.file;
        if (!file) {
            return NotOK(res, "S3 Upload Failed", {}, HTTPStatusCode.BadRequest);
        }
        const url = await upload_single_image(file);
        return OK(res, "S3 Upload Success", url, HTTPStatusCode.Accepted);
    } catch (error: any) {
        return errorHandler(error, res);
    }
}

export { UploadSingle }