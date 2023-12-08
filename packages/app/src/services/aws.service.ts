import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/aws/s3/client";
import { uploadedUrl } from "../helpers/aws/uploadedUrl";
import { HttpError } from "../http/error";
import HTTPStatusCode from "../enums/http/status.enum";
import sanitize from "sanitize-filename";
const upload_single_image = async (file: Express.Multer.File) => {
    const params: any = {
        Bucket: process.env.AWS_IMAGE_BUCKET as string,
        Key: sanitize(file.originalname),
        Body: file.buffer,
        ACL: 'public-read',
        ContentType: file.mimetype,
    };
    const command = new PutObjectCommand(params);

    const uploadResult = await s3.send(command);
    if (!uploadResult) {
        return new HttpError("S3 Upload Failed", {}, HTTPStatusCode.InternalServerError);
    }
    return uploadedUrl(params.Bucket, params.Key);
};

const upload_multiple_images = async (files: Express.Multer.File[]) => {
    console.log(files)
    const uploadPromises: Promise<string>[] = files.map(async (file) => {
        const params: any = {
            Bucket: process.env.AWS_IMAGE_BUCKET as string,
            Key: sanitize(file.originalname),
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype,
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);
        const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
        return fileUrl;
    });

    const uploadedUrls = await Promise.all(uploadPromises);
    if (uploadedUrls.length === 0) {
        return new HttpError("S3 Upload Failed", {}, HTTPStatusCode.InternalServerError);
    }
    return uploadedUrls;
}

export { upload_single_image, upload_multiple_images };
