const express = require('express');
const router = express.Router();

const {stationValidator} = require('../validators');
const {create, getStationById, getAllStations, readById, updateStationById, deleteStationById} = require('../controllers/station');
const { requiredSignin, isAuth, isAdmin} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/station/create/:userId", requiredSignin, stationValidator, isAuth, isAdmin, create);
router.get("/station/:stationId", readById);//getStationById returns station object, readById read that object
router.put("/station/:stationId/:userId", requiredSignin, stationValidator, isAuth, isAdmin, updateStationById);
router.delete("/station/:stationId/:userId", requiredSignin, stationValidator, isAuth, isAdmin, deleteStationById);
router.get("/stations", getAllStations);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes
router.param('stationId', getStationById);// Whenever stationId is called, getStationId executes


module.exports = router;