const express = require('express');
const router = express.Router();

const createPost = require("../controller/noticeController");
const registerStudent = require('../controller/studentRegister');
const getAllPosts = require('../controller/getAllPost');
const { localFileUpload } = require("../controller/localFileUpload");


const registerCompany = require('../controller/registerCompany');
const applyforjob = require('../controller/applyjobController')

router.post('/register',registerStudent)
router.post("/localFileUpload", localFileUpload);

router.post("/create",createPost)
router.get("/allPosts",getAllPosts)

router.post("/applyjob",applyforjob.ApplyJob)
router.get("/appliedStudent",applyforjob.getAllApply)

router.post('/company',registerCompany.createCompany);
router.get('/allCompany',registerCompany.getAllCompany);


module.exports = router;