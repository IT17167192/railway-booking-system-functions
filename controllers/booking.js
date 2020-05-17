const Booking = require('../models/bookings');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Create station
exports.create = (req, res) => {
    const booking = new Booking(req.body);
    booking.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({data});
    });
};

// Get Booking by ID
exports.getBookingById = (req, res, next, id)  => {
    Booking.findById(id).populate("user").populate('fromStation').populate('toStation').exec((err, book) => {
        if(err || !book){
            return res.status(400).json({
                error: "Not a Booking!"
            });
        }

        req.booking = book;
        next();
    });
};

//Get all bookings
exports.getAllBookings = (req, res) => {
    Booking.find().populate("user").populate('fromStation').populate('toStation').exec((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json(data);

    });
};

// Return station from Request object
exports.readById = (req, res) => {
    return res.json(req.booking);
};

//update booking by ID
exports.updateBookingById = (req, res) => {
    const booking = req.booking;
    booking.user = req.body.user;
    booking.fromStation = req.body.fromStation;
    booking.toStation = req.body.toStation;
    booking.noOfAdultPassengers = req.body.noOfAdultPassengers;
    booking.noOfChildPassengers = req.body.noOfChildPassengers;
    booking.pricePerAdultPassenger = req.body.pricePerAdultPassenger;
    booking.pricePerChildPassenger = req.body.pricePerChildPassenger;
    booking.save((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json(data);
    });
};

//Delete Station by ID
exports.deleteBookingById = (req, res) => {
    const booking = req.booking;
    booking.remove((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json({
            message: "Station deleted"
        });
    });
};

//find a booking by user id
exports.getBookingsByUserId = (req, res) => {
    Booking.find({'user':req.profile._id}).populate("user").populate('fromStation').populate('toStation').exec((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json(data);
    });
};