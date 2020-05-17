const express = require('express');
const router = express.Router();

const {bookingValidator} = require('../validators');
const {create, getBookingById, getAllBookings, readById, updateBookingById, deleteBookingById, getBookingsByUserId} = require('../controllers/booking');
const { requiredSignin, isAuth} = require('../controllers/auth');
const { getUserById } = require("../controllers/user");


//routes
router.post("/booking/create/:userId", requiredSignin, bookingValidator, isAuth, create);
router.get("/booking/:bookingId", readById);//getBookingById returns booking object, readById read that object
router.put("/booking/:bookingId/:userId", requiredSignin, bookingValidator, isAuth, updateBookingById);
router.delete("/booking/:bookingId/:userId", requiredSignin, bookingValidator, isAuth, deleteBookingById);
router.get("/bookings", getAllBookings);
router.get("/bookings/:userId", getBookingsByUserId);

router.param('userId', getUserById);// Whenever userId is called, getUserById executes
router.param('bookingId', getBookingById);// Whenever bookingId is called, getStationId executes


module.exports = router;