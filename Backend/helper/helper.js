const cloudinary = require("cloudinary");
const _ = require("underscore");

const Q = require("q");

function upload(file) {
  //replace cloud_name, api_key & api_secret with your own cloudinary acc
  cloudinary.config({
    cloud_name: "xxx",
    api_key: "xxx",
    api_secret: "xxx",
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      (err, res) => {
        if (err) {
          console.log("Cloudinary error", err);
          reject(err);
        } else {
          console.log("Cloudinary res:", res);
          return resolve(res.url);
        }
      }
    );
  });
}

module.exports.upload = upload;
