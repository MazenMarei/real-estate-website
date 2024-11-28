// courses_uploader.js
const multer = require("multer");
import { Request, Response } from "express";
import path from "path";
// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req: Request, file: Response, cb: Function) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Filter to allow only image uploads
const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
