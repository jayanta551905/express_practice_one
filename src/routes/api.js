const express = require('express');
const { route } = require('../../app');
const helloController = require('../controllers/helloController');
const studentController = require('../controllers/studentController');
const router = express.Router();

// this is my first routing
router.get("/helloGet", helloController.HelloGet);
router.post("/helloPost", helloController.HelloPost);

// using mongoose 
router.post("/insertStudent", studentController.insertStudent);
router.get("/readStudent", studentController.readStudent);
router.post("/updateStudent/:id", studentController.updateStudent);
router.get("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
