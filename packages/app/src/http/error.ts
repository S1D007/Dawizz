import { IErrorMessage } from "../types/response/error.types";

export class HttpError extends Error {
    public status: number;
    public data: any;
    public type: IErrorMessage;

    constructor(type: IErrorMessage, data: any = {}, status: number = 500) {
        super(type);
        this.name = this.constructor.name;
        this.status = status;
        this.data = data;
        this.type = type;
        Error.captureStackTrace(this, this.constructor);
    }
}
