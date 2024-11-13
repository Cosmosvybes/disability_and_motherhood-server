const { admin } = require("../utils/mongodb/collection/Admin");

exports.getUser = async (email) => {
  const user = await admin.findOne({ email: email });
  return user;
};

exports.addUser = async (email, password) => {
  const response = await admin.insertOne({ email, password });
  return response.insertedId;
};
