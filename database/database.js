const mongoose = require('mongoose');
require('dotenv').config();

const database = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Db connect');
  } catch (error) {
    console.error(error);
  }
}

database();

module.exports = database;