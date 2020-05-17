const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    locationName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Station", stationSchema);