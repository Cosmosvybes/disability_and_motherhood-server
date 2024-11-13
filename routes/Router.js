const express = require("express");
const { localFileUploader } = require("../middleware/multer/Multer");
const { createPost } = require("../API/API");
const router = express.Router();

router.post(
  "/field-research-updates/new/post",
  localFileUploader.single("postImage"),
  createPost
);
router.post("/sign-in");
exports.routes = router;
