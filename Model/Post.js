const { posts } = require("../utils/mongodb/collection/Posts");

exports.Post = async (postInfo) => {
  try {
    const response = await posts.insertOne({ ...postInfo });
    return response.insertedId;
  } catch (error) {
    return "oops, something went wrong";
  }
};
