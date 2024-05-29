// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const jobSchema = new Schema({
//     FirstName:{
//         type:String,
//         required:true
//     },
//     LastName:{
//         type:String,
//         required:true
//     },
//     Email:{
//         type:String,
//         required:true
//     },
//     Address:{
//         type:String,
//         required:true
//     },
//     AddressTwo:{
//         type:String,
//         required:true
//     },
//     City: {
//         type:String,
//         required:true
//     },
//     State: {
//         type:String,
//         required:true
//     },
//     Zip: {
//         type:String,
//         required:true
//     }
// });

// const applyJobModel = mongoose.model('job', jobSchema);

// module.exports = applyJobModel;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    AddressTwo:{
        type:String,
        required:true
    },
    City: {
        type:String,
        required:true
    },
    State: {
        type:String,
        required:true
    },
    Zip: {
        type:String,
        required:true
    },
    Department: {
        type:String,
        required:true
    },
    Gender: {
        type:String,
        required:true
    },
    PassoutYear: {
        type:String,
        required:true
    },
    PhoneNumber: {
        type:Number,
        required:true
    },
});

const applyJobModel = mongoose.model('job', jobSchema);

module.exports = applyJobModel;
