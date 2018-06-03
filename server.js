const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const port = process.env.PORT || 2345;

// Connect DB
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("DB connected..."))
  .catch(err => console.log("Error: ", err));

// Load Model
require("./models/Starter");
const Starter = mongoose.model("starters");

app.get("/", (req, res) => {
  // const newStarter = new Starter({
  //   starter:
  //     "If somebody put a gun to your head, and you had to make a choice, would you rather have coffee or wine?"
  // });
  // newStarter
  //   .save()
  //   .then(starter => console.log("Starter saved"))
  //   .catch(err => console.log("Error: ", err));
  res.send("Index reached");
});

app.get("/getStarter", (req, res) => {
  Starter.find()
    .then(starters => {
      console.log(starters);
      let randomItem = Math.floor(Math.random() * starters.length);
      res.json(starters[randomItem]);
    })
    .catch(err => console.log("Error: ", err));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
