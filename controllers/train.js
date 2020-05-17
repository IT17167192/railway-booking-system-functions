const Train = require('../models/trains');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Create Train
exports.create = (req, res) => {
    const train = new Train(req.body);
    train.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json({data});
    });
};

//get train by id
exports.getTrainById = (req, res, next, id) => {
    Train.findById(id).populate('route').exec((err, train) => {
       if(err || !train){
           return res.status(400).json({
               error: "Not a Train!"
           });
       }
       req.train = train;
       next();
    });
}

//get all trains
exports.getAllTrains = (req, res) => {
  Train.find().populate('route').exec((err, data) => {
      if(err){
          return res.status(400).json({
              error: errorHandler(err)
          });
      }

      res.json(data);
  })
};

//return train from request object
exports.readById = (req, res) => {
    return res.json(req.train);
};

//update train by ID
exports.updateTrainById = (req, res) => {
    const train = req.train;
    train.trainName = req.body.trainName;
    train.route = req.body.route;
    train.capacity = req.body.capacity;

    train.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json(data);
    });
};

//Delete train by id
exports.deleteTrainById = (req, res) => {
  const train = req.train;
  train.remove((err, data) => {
      if(err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }

      res.json({
          message: "Train deleted successfully!"
      });
  })
};