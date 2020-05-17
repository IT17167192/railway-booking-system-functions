const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const trainSchema = new mongoose.Schema({
    trainName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    },
    route: {
        type: ObjectId,
        ref: 'RouteModal',
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Train", trainSchema);