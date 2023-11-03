//all import
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose=require("mongoose")


//import  routers
const authRouter = require("./routes/auth.route");
const logger = require("./utils/logger");

//code
const app = express();


//connect to mongoDb database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => logger.info("MongoDB is connected Successfully !"))
  .catch((err) => {
    logger.error(err.message);
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
app.use("/api/auth", authRouter);

//start the express server
const PORT = process.env.PORT || 3501;
app.listen(PORT, () => logger.info(`Express Server running on port ${PORT}`));
