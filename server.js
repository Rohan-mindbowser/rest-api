const express = require("express");
const app = express();
const winston = require("winston");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logger configuration here
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "./logs/exceptions.log" }),
  ],
});



require("dotenv").config();

const PORT = process.env.PORT || 4000;

//Importing books routes
const booksRoute = require("./routes/booksRoute");

//setting books routes
app.use("/api", booksRoute);

//Importing DB connection
const connection = require("./config/db_connection");

//Checking DB connection here
connection.once("open", function () {
  logger.info("MongoDB database connection established successfully...");
});

//Server listening
app.listen(PORT, () => {
  logger.warn(`Server running on port ${PORT}`);
});
