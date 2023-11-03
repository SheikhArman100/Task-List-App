const User = require("../models/user.model");
const logger = require("../utils/logger");
const bcrypt = require("bcrypt");

//register new user
const registerUser = async (req,res) => {
  try {
    const { username, email, password, image } = req.body;
    if (!username || !email || !image || !password) {
      return res.status(400).json({
        message: "Invalid or incomplete user data",
      });
    }

    //? check is email or username already exist in database
    const existedUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existedUser) {
      return res.status(409).json({
        message: "Username or email is already registered",
      });
    }

    try {
      //encrypt password
      const hashPassword = await bcrypt.hash(password, 10);

      //create user in database
      const newUser = new User({
        username,
        email,
        password: hashPassword,
        image,
      });
      await newUser.save();
      return res.status(201).json({
        message: "New account is created successfully",
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        message: "registration failed",
        error: error.massage,
      });
    }
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something went wrong while registration",
      error: error.message,
    });
  }
};
module.exports = { registerUser };
