const express = require('express');
const router = express.Router();

const {trainValidator} = require('../validators');
const {create, getTrainById, getAllTrains, readById, updateTrainById, deleteTrainById} = require('../controllers/train');
const { requiredSignin, isAuth, isAdmin} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/train/create/:userId", requiredSignin, trainValidator, isAuth, isAdmin, create);
router.get("/train/:trainId", readById);//getTrainById returns train object, readById read that object
router.put("/train/:trainId/:userId", requiredSignin, trainValidator, isAuth, isAdmin, updateTrainById);
router.delete("/train/:trainId/:userId", requiredSignin, trainValidator, isAuth, isAdmin, deleteTrainById);
router.get("/trains", getAllTrains);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes
router.param('trainId', getTrainById);// Whenever trainId is called, getTrainId executes


module.exports = router;