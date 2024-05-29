const registerModel = require('../model/registerModel');


const createStudent = async (req, res) =>{
    try{
     const {
        Name,
        Email,
        Message,
     } = req.body;
     await registerModel.create({
        Name,
        Email,
        Message,
     });
     return res.json({
        success:true,
        message:"created succesfully"
     })
    } catch (err){
        res.status(400).json({
            message:err.message
        })
    }
}

module.exports = createStudent;