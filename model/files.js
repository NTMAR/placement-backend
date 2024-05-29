const mongoosse = require('mongoose');

const fileSchema = new mongoosse.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

const File =mongoosse.model('File',fileSchema);
module.exports = File;