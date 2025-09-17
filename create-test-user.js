require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const connectDB = require('../db');
const User = require('../models/user');

const createTestUser = async () => {
  await connectDB();

  const email = 'test@vervego.com';
  const password = 'password123';

  const userExists = await User.findOne({ email });

  if (userExists) {
    console.log('Test user already exists.');
    process.exit();
  }

  const user = await User.create({
    name: 'Test Agent',
    email,
    password,
    agencyName: 'Test Agency',
  });

  if (user) {
    console.log('Test user created successfully!');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  } else {
    console.log('Error creating test user.');
  }

  process.exit();
};

createTestUser();
