const mongoose = require("mongoose");

// Connecting and creating a database
mongoose
  .connect("mongodb://localhost:27017/whitediamondgym", {
    // Below mention codes are commented bez; Mongoose 6 doesnot have to specify that
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });
