const express = require('express');
const router = express.Router();

const {trainValidator} = require('../validators');
const {create} = require('../controllers/train');
const { requiredSignin, isAuth, isAdmin} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/train/create/:userId", requiredSignin, trainValidator, isAuth, isAdmin, create);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes


module.exports = router;