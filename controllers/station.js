const Station = require('../models/stations');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Create station
exports.create = (req, res) => {
    const station = new Station(req.body);
    station.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({data});
    });
};

// Get Station by ID
exports.getStationById = (req, res, next, id)  => {
    Station.findById(id).exec((err, stat) => {
        if(err || !stat){
            return res.status(400).json({
                error: "Not a Station!"
            });
        }

        req.station = stat;
        next();
    });
};

//Get all stations
exports.getAllStations = (req, res) => {
    Station.find().exec((err, data) => {
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
    return res.json(req.station);
};

//update station by ID
exports.updateStationById = (req, res) => {
    const station = req.station;
    station.stationName = req.body.stationName;
    station.locationName = req.body.locationName;
    station.save((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json(data);
    });
};

//Delete Station by ID
exports.deleteStationById = (req, res) => {
    const station = req.station;
    station.remove((err, data) => {
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