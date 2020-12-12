const cloudinary = require("cloudinary");
const _ = require("underscore");

const Q = require("q");

function upload(file) {
  cloudinary.config({
    cloud_name: "infotech5",
    api_key: "814419576474518",
    api_secret: "DSCIM2EwisH1DTKxABmpBCq-zrM",
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
