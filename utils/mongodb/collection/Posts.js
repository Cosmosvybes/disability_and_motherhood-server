const { db } = require("../Mongodb");
const posts = db.collection("field-research-updates");
exports.posts = posts;
