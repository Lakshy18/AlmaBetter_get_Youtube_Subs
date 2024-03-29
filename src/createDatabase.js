const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

//dot env import
const dotenv = require("dotenv").config();

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://LakshyRaj:LakshyRaj@cluster0.jpxmvcv.mongodb.net/?retryWrites=true&w=majority" ||
  process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
