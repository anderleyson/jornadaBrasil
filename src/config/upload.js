import multer from 'multer';


const storage = multer.diskStorage(
    {
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      },
    },
  );
  
  const fileFilter = (req, file, callback) => {
      if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
          callback(null, true);
      }else{
          callback(null, false);
      }
  }
  
  const upload = multer({ 
      storage: storage,
      limits:{
          fileSize: 1024*1024*5
      },
     fileFilter: fileFilter    
  });

  
  export default upload;