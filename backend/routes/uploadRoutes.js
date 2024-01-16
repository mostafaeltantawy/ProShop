import path from 'path';
import { Router } from 'express';
import multer from 'multer';

const router = Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(req, file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({ storage, fileFilter: checkFileType });
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file.path);
  res.send({
    message: 'Image Uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;
