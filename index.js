const express = require('express');
const cors = require("cors");

const dbconnect = require('./config/dbconnect.js')
const routes = require('./routes/routes.js')

const app = express();
dbconnect();



const fileupload = require('express-fileupload');
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

app.use(fileupload());//main routes


require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use('/v1',routes);

const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})