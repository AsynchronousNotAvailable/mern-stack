//dotenv enables us to load '.env' file into process.env, an obj in js
require("dotenv").config();
// import packages 
const express = require("express");
const mongoose = require("mongoose");
//get the routes from routes.js
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());
//when a request is fired, it will log the request path and what method the request is using(GET, POST, PUT,...)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
//when a request is fired to '/api/workouts', workoutRoutes will be used
app.use("/api/workouts", workoutRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
