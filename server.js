const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const expressValidator = require('express-validator');

require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const trainRoutes = require('./routes/train');
const stationRoutes = require('./routes/station.js');
const tripRoutes = require('./routes/trip.js');
const routesRoute = require('./routes/routesRoute.js')
const bookingRoute = require('./routes/booking.js')


const app = express();
//middleware
app.use(expressValidator());
app.use(cors());
//use to pass json
app.use(express.json());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', trainRoutes);
app.use('/api', stationRoutes);
app.use('/api', tripRoutes);
app.use('/api', routesRoute);
app.use('/api', bookingRoute);

const port = process.env.PORT || 8000;

//starts the server
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

//db connection
mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true}
)
    .then(() => console.log('DB Connected'));

//if error occur
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});