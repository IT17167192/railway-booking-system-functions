const express = require('express');
const router = express.Router();

const {routeValidator} = require('../validators');
const {create, getRouteById, getAllRoutes, readById, updateRouteById, deleteRouteById} = require('../controllers/routeController');
const { requiredSignin, isAuth, isAdmin} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/route/create/:userId", requiredSignin, routeValidator, isAuth, isAdmin, create);
router.get("/route/:routeId", readById);//getRouteById returns station object, readById read that object
router.put("/route/:routeId/:userId", requiredSignin, routeValidator, isAuth, isAdmin, updateRouteById);
router.delete("/route/:routeId/:userId", requiredSignin, routeValidator, isAuth, isAdmin, deleteRouteById);
router.get("/routes", getAllRoutes);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes
router.param('routeId', getRouteById);// Whenever routeId is called, getRouteId executes


module.exports = router;