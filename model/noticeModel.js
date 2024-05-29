const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const noticeBoard = new Schema({
    companyName: {
        type: String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    time: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

// Create and export the model
module.exports = mongoose.model("notice",noticeBoard);