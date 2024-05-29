const jobModel = require('../model/applyJobModel')
const {sendMail} = require("../helpers/mailController");
const ApplyJob = async (req, res)=>{
    try{
        const newApply = new jobModel(req.body);
        await newApply.save();
        const email = newApply.Email;
        const name = newApply.FirstName;
        res.status(200).json({
           message: "Apply successfully"
        })

        sendMail(email,"Sucess! You're registered",`This letter is to ${name} inform you that we received your application. We appreciate you taking the time to apply.We are currently in the process of taking applications and anticipate beginning interviews [add a time frame]. If you are selected for an interview, our human resources department will be in contact with you by 12/10/1024.Thank you again for the time you invested in your application`)

    } catch(error){
        res.status(500).json({
            message:error.message
          })
    }
}

const getAllApply = async (req, res)=>{
    try{
        const allApply = await jobModel.find();
        if(!allApply){
            return res.status(404).json({
                message:'Student Not found',
            })
        }
        res.json({
            message: 'All company',
        })

    }catch(error){
        res.status(500).json({
            message:'Not Getting',
            error:error.message
        })
    }
}

module.exports = {
    ApplyJob,  getAllApply
}