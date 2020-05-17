const Trip = require('../models/trips');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Create station
exports.create = (req, res) => {
    const trip = new Trip(req.body);
    trip.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({data});
    });
};