const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect = () => {
    mongoose.connect(process.env.DB_URI, {}).then(() => { console.log('dbconnect'); }).catch((err) => {
        console.log('error connecting', err)
        console.log(err)
        process.exit(1);
    });

}

module.exports = dbconnect;