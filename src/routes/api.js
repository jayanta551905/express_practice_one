const express = require('express');
const { route } = require('../../app');
const helloController = require('../controllers/helloController');
const studentController = require('../controllers/studentController');
const jwtPractice = require('../controllers/JWTpractice');
const tokenIssuController = require('../controllers/tokenIssuController');
const tokenVeryfy = require('../middleware/tokenVeryfymiddleware');
const router = express.Router();

// this is my first routing
router.get("/helloGet", helloController.HelloGet);
router.post("/helloPost", helloController.HelloPost);

// using mongoose 
router.get("/tokenIssu",tokenIssuController.createToken);
router.post("/insertStudent",tokenVeryfy,studentController.insertStudent);
router.get("/readStudent",tokenVeryfy,studentController.readStudent);
router.post("/updateStudent/:id",tokenVeryfy,studentController.updateStudent);
router.get("/deleteStudent/:id",tokenVeryfy,studentController.deleteStudent);

// create JWT token
router.get("/createToken", jwtPractice.createToken);

// decode JWT token
router.get("/decodeToken", jwtPractice.decodeToken);

module.exports = router;
