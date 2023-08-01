// initializing express
const express = require("express");

//initializing mongoose
const mongoose = require("mongoose");

// module/file import
const app = require("./src/app.js");
const Subscriber = require("./src/models/subscribers.js");
const data = require("./src/data.js");

//dotenv import
const dotenv = require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Port
const port = 3000 || process.env.PORT;

// Database url
const dbURL =
  "mongodb+srv://LakshyRaj:LakshyRaj@cluster0.jpxmvcv.mongodb.net/?retryWrites=true&w=majority" ||
  process.env.DATABASE_URL;

// Listing server on port 3000
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to Database");
    // server listening
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  })
  .catch((err) => {
    console.log(err);
  });

// refreshing
const refresh = async () => {
  try {
    await Subscriber.deleteMany({}, { timeout: 30000 });
    console.log("All Subscriber are deleted successfully!");
    const newSubscribers = await Subscriber.insertMany(data);
    console.log(`${newSubscribers.length} New subscriber added successfully`);
  } catch (error) {
    console.log(error, "Error while refreshing data");
  }
};
refresh();
