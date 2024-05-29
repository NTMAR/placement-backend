const companyModel = require('../model/companyModel');
const createCompany = async (req,res)=>{
    try{
        const newCompany = new companyModel(req.body);
        await newCompany.save();
        res.status(200).json({
           message: "Company created successfully"
        })
    }catch(error){
        res.status(500).json({
          message:error.message
        })
    }
}



// get all the student
const getAllCompany =async(req,res)=>{
    try{
        const allcompany = await companyModel.find();
        if(!allcompany){
            return res.status(404).json({
                message:'company not found',
            })
        }
        res.json({
            data:allcompany,
        })
    }
 
   catch(error){
    res.status(500).json({
        message:'Error getting all company',
        error:error.message
    })
 }
}


module.exports = {
    createCompany,  getAllCompany
}