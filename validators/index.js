//userSignupValidator middleware implementation
exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email must between 3 to 50 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @ sign')
        .isLength({
            min: 3,
            max: 50
        });
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({
            min: 6
        })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');

    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
};

exports.trainValidator = (req, res, next) => {
    req.check('trainName', 'Train name must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Train name cannot be empty');

    req.check('route', 'Train route must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Train route cannot be empty');

    req.check('capacity', 'Train capacity must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Train capacity cannot be empty');

    const catErr = req.validationErrors();

    if (catErr) {
        const catNameError = catErr.map(catErr => catErr.msg)[0];
        return res.status(400).json({error: catNameError});
    }
    next();
};

exports.stationValidator = (req, res, next) => {
    req.check('stationName', 'Station name must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Station name cannot be empty');

    req.check('locationName', 'Station location must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Station location cannot be empty');

    const catErr = req.validationErrors();

    if (catErr) {
        const catNameError = catErr.map(catErr => catErr.msg)[0];
        return res.status(400).json({error: catNameError});
    }
    next();
};

exports.bookingValidator = (req, res, next) => {
    req.check('user', 'User must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('User cannot be empty');

    req.check('fromStation', 'From station must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('From cannot be empty');

    req.check('toStation', 'To station must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('To cannot be empty');

    const catErr = req.validationErrors();

    if (catErr) {
        const catNameError = catErr.map(catErr => catErr.msg)[0];
        return res.status(400).json({error: catNameError});
    }
    next();
};

exports.routeValidator = (req, res, next) => {
    req.check('startLocation', 'Start Location name must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Start Location name cannot be empty');

    req.check('endLocation', 'End Location name must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('End location cannot be empty');

    const catErr = req.validationErrors();

    if (catErr) {
        const catNameError = catErr.map(catErr => catErr.msg)[0];
        return res.status(400).json({error: catNameError});
    }
    next();
};

exports.tripValidator = (req, res, next) => {
    req.check('train', 'Train name must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Train cannot be empty');

    req.check('stops', 'Stops must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Stop cannot be empty');

    req.check('dayOfTheWeek', 'Day of the week must be added!').notEmpty()
        .isLength({
            min: 1,
        })
        .withMessage('Day of the week cannot be empty');

    const catErr = req.validationErrors();

    if (catErr) {
        const catNameError = catErr.map(catErr => catErr.msg)[0];
        return res.status(400).json({error: catNameError});
    }
    next();
};
