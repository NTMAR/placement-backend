const File = require('../model/files');
const cloudinary = require('cloudinary').v2;

exports.localFileUpload= async(req,res)=>{
    try {
        //fetch files
        const file = req.files.file;
        console.log("file--",file);
        let path = __dirname +"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        console.log(path);
        file.mv(path,(err)=>{
            console.log(err)
        });
        res.json({
            success:true,
            message:"Local file uploaded successfully",

        })
        
    } catch (error) {
        console.log(error);
    }

}

//image upload handler