var timestamp = require('time-stamp');
var uid = require('uid');
var path = require('path');
var multer = require('multer');

function imgUpload(imgPath,imgType,fileSize){
    var storage = multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, imgPath);
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname + '-' + timestamp('YYYYMMDD') + '-' + uid() + path.extname(file.originalname));
        }
    });

    function fileFilter(req,file,cb){
        if(imgType.indexOf(file.mimetype) == -1){
            cb(null,false);
            cb(new Error('你上传的文件格式不符,请重新上传'));
        }else{
            cb(null,true);
        }
    }

    var upload = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: fileSize,
        }
    });

    return upload;
}

module.exports = imgUpload;