const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const tripSchema = new mongoose.Schema({
    train: {
        type: ObjectId,
        ref: 'Train',
        required: true
    },
    dayOfTheWeek: {
        type: String,
        required: true
    },
    stops: [{
        arrival: {
            type: String,
            required: true
        },
        fromStation: {
            type: ObjectId,
            ref: 'Station',
            required: true
        },
        departure: {
            type: String,
            required: true
        },
        toStation: {
            type: ObjectId,
            ref: 'Station',
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }]
}, {timestamps: true});

module.exports = mongoose.model("Trip", tripSchema);