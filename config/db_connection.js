const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_DB_URL;

mongoose.connect(uri);

const connection = mongoose.connection;

module.exports = connection;
