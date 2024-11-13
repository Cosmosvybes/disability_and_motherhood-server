const { db } = require("../Mongodb");
const administration = db.collection("administration");
exports.admin = administration;
