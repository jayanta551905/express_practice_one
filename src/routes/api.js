const express = require('express');
const helloController = require('../controllers/helloController');
const router = express.Router();

// this is my first routing
router.get("/helloGet", helloController.HelloGet);
router.post("/helloPost", helloController.HelloPost)

module.exports = router;
