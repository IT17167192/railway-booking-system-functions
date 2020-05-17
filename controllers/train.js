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