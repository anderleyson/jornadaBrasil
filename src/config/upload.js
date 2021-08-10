const multer = require('multer');
const path  = require('path');
const crypto  = require('crypto');
const aws  = require('aws-sdk')
const multerS3  = require('multer-s3');



const storage = multer.diskStorage({
            destination: (req, file, cb)=>{
                cb(null, path.resolve(__dirname, '..', '..', 'uploads'))
            },
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if(err) cb(err);
                    
                    file.key = `${hash.toString('hex')}`;
                    cb(null, file.key + file.originalname);  
                });
            }

});
  
const fileFilter = (req, file, cb) => {
    const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/gif'
    ];
    if (allowedMimes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error("Invalid file type"));
    }
}
  
  
  const upload = multer({ 
        dest: path.resolve(__dirname, '..', '..', 'uploads'),
      storage: storage,
      limits:{
          fileSize: 1024*1024*5
      },
     fileFilter: fileFilter    
  });

 module.exports = upload;
    
