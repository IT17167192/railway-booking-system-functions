const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

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
    },
    relevantRoute: {
        type: ObjectId,
        ref: 'RouteModal',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Station", stationSchema);