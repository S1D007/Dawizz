export const uploadedUrl = (bucketName:string, key: string) => {
    return `https://${bucketName}.s3.amazonaws.com/${key}`;
}