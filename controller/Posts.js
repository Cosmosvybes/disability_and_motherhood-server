const { posts } = require("../utils/mongodb/collection/Posts");

exports.getPosts = async () => {
  const data = await posts.find({}).toArray();
  return data;
};
