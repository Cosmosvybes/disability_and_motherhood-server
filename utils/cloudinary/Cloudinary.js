const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  cloud_name: process.env.cloud_name,
});

exports.cloudUploader = async (file) => {
  try {
    const cldRes = await cloudinary.uploader.upload(file, {
      folder: "/disability-motherhood/research-updates",
      resource_type: "auto",
    });
    return cldRes;
  } catch (error) {
    console.log("Something went wrong try again");
  }
};
