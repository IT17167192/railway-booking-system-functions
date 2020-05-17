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
        station: {
            type: ObjectId,
            ref: 'Station',
            required: true
        },
        arrival: {
            type: String,
            required: true
        },
        departure: {
            type: String,
            required: true
        }
    }]
}, {timestamps: true});

module.exports = mongoose.model("Trip", tripSchema);