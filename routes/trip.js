const express = require('express');
const router = express.Router();

const {tripValidator} = require('../validators');
const {create} = require('../controllers/trip');
const { requiredSignin, isAuth, isAdmin} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/trip/create/:userId", requiredSignin, tripValidator, isAuth, isAdmin, create);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes


module.exports = router;