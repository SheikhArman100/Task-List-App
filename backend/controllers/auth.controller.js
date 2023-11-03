const User = require("../models/user.model");
const logger = require("../utils/logger");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register new user
const handleRegister = async (req, res) => {
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

//sign in
const handleSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Invalid or incomplete user data",
      });
    }

    //?find the user in db using email
    const findUser = await User.findOne({
      email: email,
    });
    if (!findUser)
      return res.status(401).json({
        message: "Email or Password doesn't match with any account",
      }); //Unauthorized

    //? evaluate and compare password
    const matchPassword = await bcrypt.compare(password, findUser.password);
    if (!matchPassword) {
      return res.status(401).json({
        message: "Email or Password doesn't match with any account",
      }); //Unauthorized
    }

    //?creating accessToken and refreshToken
    const accessToken = jwt.sign(
      {
        id: findUser.id,
        email: findUser.email,
        role: findUser.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jwt.sign(
      {
        id: findUser.id,
        email: findUser.email,
        role: findUser.role,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "180s" }
    );

    //?Update the user in the database with the refresh token.
    await User.findByIdAndUpdate(findUser.id, {
      refreshToken: refreshToken,
    });

    //? Creates Secure Cookie with refresh token
    res.cookie("TaskListJwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 3 * 60 * 1000, //3min
    });

    //? return accessToken in res
    return res.status(200).json({
      accessToken: accessToken,
      status: "success",
      message: "Logged in  successfully",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something went wrong while sign in",
      error: error.message,
    });
  }
};

module.exports = { handleRegister, handleSignin };
