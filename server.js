
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('../db');
const Booking = require('../models/booking');
const User = require('../models/user');
const sendEmail = require('./email');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log('MONGO_URI from .env:', process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/bookings', async (req, res) => {
  try {
    const { serviceName, bookingDetails, userEmail, userName } = req.body;

    let user = await User.findOne({ email: userEmail });
    if (!user) {
        user = await User.create({ name: userName, email: userEmail });
    }

    const booking = await Booking.create({
      user: user._id,
      serviceName,
      bookingDetails,
    });

    try {
      console.log('Attempting to send user confirmation email...');
      console.log('User Email:', user.email);
      console.log('Service Name:', serviceName);
      const userEmailOptions = {
        to: user.email,
        subject: 'Booking Confirmation',
        text: `Dear ${user.name},

Thank you for choosing VerveGo for your adventure! We are absolutely thrilled to confirm your booking for ${serviceName}.

We're committed to providing you with an unforgettable experience. Get ready for an amazing journey!

Here are your booking details: ${bookingDetails}

If you have any questions, feel free to reach out.

Warm regards,
The VerveGo Team`,
        html: `<h3>Booking Confirmation - Your Adventure Awaits!</h3><p>Dear ${user.name},</p><p>Thank you so much for choosing <strong>VerveGo</strong> for your next adventure! We are absolutely thrilled to confirm your booking for <strong>${serviceName}</strong>.</p><p>We're committed to providing you with an unforgettable experience and can't wait for you to embark on this amazing journey with us!</p><p>Here are your booking details: ${bookingDetails}</p><p>If you have any questions or need further assistance, please don't hesitate to reach out to us.</p><p>Warm regards,<br>The VerveGo Team</p>`
      };
      console.log('User Email Options:', userEmailOptions);
      await sendEmail(userEmailOptions);
      console.log('User confirmation email sent successfully.');
    } catch (err) {
        console.log('Email sending error (User Confirmation):', err);
    }

    try {
      console.log('Attempting to send agency notification email...');
      console.log('Agency Email:', process.env.AGENCY_EMAIL);
      console.log('Service Name:', serviceName);
      const agencyEmailOptions = {
        to: process.env.AGENCY_EMAIL,
        subject: 'New Booking',
        text: `A new booking has been made for ${serviceName}.`,
        html: `<h3>New Booking</h3><p>A new booking has been made for <strong>${serviceName}</strong>.</p><p>Details: ${bookingDetails}</p><p>User: ${user.name} (${user.email})</p>`
      };
      console.log('Agency Email Options:', agencyEmailOptions);
      await sendEmail(agencyEmailOptions);
      console.log('Agency notification email sent successfully.');
    } catch (err) {
        console.log('Email sending error (Agency Notification):', err);
    }

    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
