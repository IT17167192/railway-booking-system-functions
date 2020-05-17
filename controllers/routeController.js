const RouteModal = require('../models/routesModal');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Create Route
exports.create = (req, res) => {
    const routeObj = new RouteModal(req.body);
    routeObj.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({data});
    });
};

//get route by id
exports.getRouteById = (req, res, next, id) => {
    RouteModal.findById(id).exec((err, routeObj) => {
        if(err || !routeObj){
            return res.status(400).json({
                error: "Not a Route!"
            });
        }
        req.routeObj = routeObj;
        next();
    });
}

//get all routes
exports.getAllRoutes = (req, res) => {
    RouteModal.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json(data);
    })
};

//return route from request object
exports.readById = (req, res) => {
    return res.json(req.routeObj);
};

//update route by ID
exports.updateRouteById = (req, res) => {
    const routeObj = req.routeObj;
    routeObj.startLocation = req.body.startLocation;
    routeObj.endLocation = req.body.endLocation;

    routeObj.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json(data);
    });
};

//Delete route by id
exports.deleteRouteById = (req, res) => {
    const routeObj = req.routeObj;
    routeObj.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({
            message: "Route deleted successfully!"
        });
    })
};