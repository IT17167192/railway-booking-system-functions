const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    routeName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    startLocation: {
        type: String,
        trim: true,
        required: true
    },
    endLocation: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("RouteModal", routeSchema);