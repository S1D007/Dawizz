import multer from "multer";

const uploadMultiple = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 100 * 1024 * 1024,
        files: 50
    },
});

const uploadSingle = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  });

const UploadMultipleMiddleWare = uploadMultiple.array('images', 50);
const UploadSingleMiddleWare = uploadSingle.single('image');

export {
    UploadMultipleMiddleWare,
    UploadSingleMiddleWare
};