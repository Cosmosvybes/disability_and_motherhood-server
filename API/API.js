const { getUser, addUser } = require("../controller/Account");
const { getPosts } = require("../controller/Posts");
const { Post } = require("../Model/Post");
const { cloudUploader } = require("../utils/cloudinary/Cloudinary");
const jwt = require("jsonwebtoken");

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
      .status(503)
      .send({ response: "Service temporarily unavailable, try again" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const data = await getPosts();
    return data && res.status(200).send({ response: data });
  } catch (error) {
    res.status(500).send({ response: "Internal server error" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await getUser(email);
    if (user) {
      if (user.password != password) {
        return res.status(401).send({ response: "Incorrect password" });
      }
      const token = jwt.sign({ email: user.email }, "secret", {
        expiresIn: "1hr",
      });
      return res.status(200).send({ response: `Welcome back ${email}`, token });
    } else {
      res.status(404).send({ response: "Account not found" });
    }
  } catch (error) {
    res.status(500).send({ response: "connection couldn't be  established" });
  }
};

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await addUser(email, password);
    return (
      response &&
      res.status(200).send({ response: "Account successfully created" })
    );
  } catch (error) {
    res.status(500).send({ response: "connection couldn't be  established" });
  }
};
