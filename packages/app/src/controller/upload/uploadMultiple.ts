import { Request, Response } from "express";
import { _login } from "../../services/auth.service";
import OK from "../../response/ok";
import HTTPStatusCode from "../../enums/http/status.enum";
import errorHandler from "../../http/httpErrorHandler";
import { _create } from "../../services/event.service";
import NotOK from "../../response/notOk";
import { upload_multiple_images } from "../../services/aws.service";

async function UploadMultiple(req: Request & {
    id?: string;
}, res: Response) {
    try {
        const files = req.files;
        if (!files) {
            return NotOK(res, "S3 Upload Failed", {}, HTTPStatusCode.BadRequest);
        }
        const urls = await upload_multiple_images(files as Express.Multer.File[]);
        return OK(res, "Event Creation Success", urls, HTTPStatusCode.Accepted);
    } catch (error: any) {
        return errorHandler(error, res);
    }
}

export { UploadMultiple }