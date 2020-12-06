const cloudinary = require("cloudinary");
const _ = require("underscore");

const Q = require("q");

function upload(file) {
  cloudinary.config({
    cloud_name: "pemeluksenja",
    api_key: "737684478349774",
    api_secret: "P2dN2hBKxi65_jwO6_sjNI2ugf0",
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      { width: 50, height: 50 },
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
