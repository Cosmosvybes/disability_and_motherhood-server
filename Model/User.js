const { admin } = require("../utils/mongodb/collection/Admin");

exports.User = async (email, password) => {
  const insertResponse = await admin.insertOne({ email, password });
  return insertResponse.insertedId;
};
