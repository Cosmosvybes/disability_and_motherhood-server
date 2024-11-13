const multer = require("multer");

exports.localFileUploader = multer({
  dest: "./images",
  limits: { fileSize: 1024 * 1024 * 10 },
});
