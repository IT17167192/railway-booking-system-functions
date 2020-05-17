const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    fromStation:{
        type: ObjectId,
        ref: 'Station',
        required: true
    },
    toStation:{
        type: ObjectId,
        ref: 'Station',
        required: true
    },
    noOfAdultPassengers:{
        type: Number,
        required: true
    },
    noOfChildPassengers:{
        type: Number,
        required: true
    },
    pricePerAdultPassenger:{
        type: Number,
        required: true
    },
    pricePerChildPassenger:{
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Booking", bookingSchema);