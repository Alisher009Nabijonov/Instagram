const multer = require("multer");
const path = require("path");

// Yuklanadigan fayllarni saqlash joyi va nomi
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // "uploads" papkasiga saqlanadi
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unikal nom beriladi
  },
});

// Faqat rasm fayllarini qabul qilish uchun filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and JPG files are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
