//all import
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose=require("mongoose")


//import  routers
// const authRouter = require("./routes/auth.route");

//code
const app = express();


//connect to mongoDb database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is connected Successfully !"))
  .catch((err) => {
    console.log(err.message);
  });

//middleware for cookies
app.use(cookieParser());
// built-in middleware for json
app.use(express.json());
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false })); //why false?

// Cross Origin Resource Sharing
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], //!write frontend route here
  })
);

//routes
// app.use("/api/v1.0.0/auth", authRouter);

//start the express server
const PORT = process.env.PORT || 3501;
app.listen(PORT, () => console.log(`Express Server running on port ${PORT}`));
