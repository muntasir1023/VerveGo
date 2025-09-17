const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const sendEmail = require('./email');
const connectDB = require('../db');

// Connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Set security headers
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
    res.removeHeader('X-XSS-Protection');
    next();
});

// Define Routes
app.use('/api/tours', require('./routes/tours'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/apply', require('./routes/application'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/users', require('./routes/users'));
app.use('/api/dashboard', require('./routes/dashboard'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
