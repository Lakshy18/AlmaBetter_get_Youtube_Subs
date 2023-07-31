// initializing express
const express = require("express");
//initializing mongoose
const mongoose = require("mongoose");
// module/file import
const app = require("./app.js");
const Subscriber = require("./models/subscribers.js");
const data = require("./data.js");

//dotenv import
const dotenv = require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Listing server on port 3000
const port = process.env.PORT || 3000;
const dbURL =
  process.env.DATABASE_URI || "mongodb://localhost:27017/youtubesubs";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to Database");
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
