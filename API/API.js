const { Post } = require("../Model/Post");
const { cloudUploader } = require("../utils/cloudinary/Cloudinary");

exports.createPost = async (req, res) => {
  let image = req.file;
  const { title, description, hyperLink } = req.body;
  const data = { title, description, hyperLink };
  try {
    const response = await cloudUploader(image.path);
    if (response.secure_url) {
      data.imageUrl = response.secure_url;
    }
    const dbResponse = await Post({ ...data });
    return (
      dbResponse &&
      res
        .status(200)
        .send({ response: "new research updates successfully posted" })
    );
  } catch (error) {
    res
      .status(500)
      .send({ response: "Service temporarily unavailable, try again" });
  }
};
