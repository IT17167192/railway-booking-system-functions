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

//get all trips
exports.getAllTrips = (req, res) => {
  Trip.find().populate('train').populate('stops.fromStation').populate('stops.toStation').exec((err, data) => {
      if(err){
          res.status(400).json({
              error: errorHandler(err)
          });
      }
     res.json(data);
  });
};

//get trip by id
exports.getTripById = (req, res, next, id) => {
    Trip.findById(id).populate('train').populate('stops.station').exec((err, trip) => {
        if(err || !train){
            return res.status(400).json({
                error: "Not a Train!"
            });
        }
        req.trip = trip;
        next();
    });
};

//return trip from request object
exports.readById = (req, res) => {
    return res.json(req.trip);
};

//update trip by ID
exports.updateTrainById = (req, res) => {
    const trip = req.trip;
    trip.train = req.body.train;
    trip.dayOfTheWeek = req.body.dayOfTheWeek;
    trip.stops = req.body.stops;

    trip.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json(data);
    });
};

//Delete trip by id
exports.cancellTripById = (req, res) => {
    const trip = req.trip;
    trip.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({
            message: "Trip Cancelled successfully!"
        });
    })
};