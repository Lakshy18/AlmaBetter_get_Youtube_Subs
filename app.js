// initializing express
const express = require("express");

// initializing express
const app = express();
const path = require("path");

const Subscriber = require("./src/models/subscriber");

// routes
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/index.html"));
});
// get all youtube subscribser
app.get("/subscribers", async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.status(200).json(subs);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});
// get subs name and subed channel
app.get("/subscribers/names", async (req, res) => {
  try {
    const subs = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.status(200).json(subs);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});
//get subs by id
app.get("/subscribers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const subs = await Subscriber.findById(id);
    res.status(200).json(subs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = app;
