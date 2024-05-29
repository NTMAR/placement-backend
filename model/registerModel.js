const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

// Define the schema for IT placement application
const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String,
        required: true,
    }
});

// Create and export the model
const register = mongoose.model('register',registerSchema);

module.exports = register;
