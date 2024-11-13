const express = require("express");
const { localFileUploader } = require("../middleware/multer/Multer");
const { createPost, getAllPosts, signIn, signUp } = require("../API/API");
const { Auth } = require("../middleware/Auth/Auth");
const router = express.Router();

router.post(
  "/field-research-updates/new/post",
  Auth,
  localFileUploader.single("postImage"),
  createPost
);
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.get("/field-research-updates", getAllPosts);
exports.routes = router;