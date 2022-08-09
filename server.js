const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  console.log("MongoDB database connection established successfully...");
});

//Server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
