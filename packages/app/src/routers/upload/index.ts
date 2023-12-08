import Router from 'express';
import { UploadMultipleMiddleWare, UploadSingleMiddleWare } from '../../common/multer';
import { UploadMultiple } from '../../controller/upload/uploadMultiple';
import { UploadSingle } from '../../controller/upload/uploadSingle';

const upload = Router();

upload.post('/single', UploadSingleMiddleWare, UploadSingle)
upload.post('/multiple', UploadMultipleMiddleWare, UploadMultiple)

export default upload;