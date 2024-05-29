//registration of students

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
   CompanyName :{
        type:String,
        required:true,
    },
    jobLocation:{
        type:String,
        required:true,
    },
    Designation:{
        type:String,
        required:true,
    },
    Work:{
        type:String,
        required:true,
    },
    jobDescription:{
        type:String,
        required:true,
    },
  
    Branch:{
        type:String,
        required:true,
    },
    Qualification:{
        type:String,
        require:true,
    },
    Experience:{
        type:String,
        require:true
    },
  
    Salary:{
        type:String,
        require:true
    },
    Eligibility:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:String,
        require:true,
    },
    Vacancies:{
        type:String,
        require:true
    }
   
})

module.exports=mongoose.model('Company',companySchema);