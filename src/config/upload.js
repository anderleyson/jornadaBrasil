const multer = require('multer');
const path  = require('path');
const crypto  = require('crypto');
const aws  = require('aws-sdk')
const multerS3  = require('multer-s3');


const storageTypes = {
    local: multer.diskStorage(
      {
        destination: (req, file, cb) => {
          cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
          crypto.randomBytes(16, (err, hash) => {
            if(err) cb(err);
            const fileName = `${hash.toString('hex')}-${file.originalname}`
            cb(null, fileName);
          })
        },
      },
    ),
    s3: multerS3({
      s3: new aws.S3(),
      bucket: 'jornada-brasil',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if(err) cb(err);
          file.key = `${hash.toString('hex')}-${file.originalname}`
          cb(null, file.key);
        })
      }
    })
  }
  const fileFilter = (req, file, callback) => {
      if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
          callback(null, true);
      }else{
          callback(null, false);
      }
  }

  const upload = multer({ 
      storage: storageTypes[process.env.STORAGE_TYPE],
      limits:{
          fileSize: 1024*1024*5
      },
     fileFilter: fileFilter    
  });


module.exports = upload; 
