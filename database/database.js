const mongoose = require('mongoose');

const database = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/wedding-app');
    console.log('Db connect');
  } catch (error) {
    console.error(error);
  }
}

database();

module.exports = database;