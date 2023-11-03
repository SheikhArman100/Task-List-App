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
const handleSignout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.TaskListJwt)
    return res.status(401).json({
      message: "No refresh token found",
    });
  const refreshToken = cookies.TaskListJwt;

  //?Is refreshToken in db?
  const findUser = await User.findOne({
    refreshToken: refreshToken,
  });
  //? if refreshToken found in cookies but not in database.Could be hacker leaked a rt from cookie
  if (!findUser) {
    res.clearCookie("TaskListJwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.status(403).json({
      message: "Not Authorized",
    });
  }

  //?remove refresh token from db and delete it from cookie
  await User.findOneAndUpdate(
    { refreshToken: refreshToken },
    { refreshToken: "" }
  );
  res.clearCookie("TaskListJwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  return res.status(200).json({
    message: "Signed out successfully",
  });
};
const handleUpdateAT=async(req,res)=>{
  const cookies = req.cookies;
  if (!cookies?.TaskListJwt)
    return res.status(401).json({
      message: "No refresh token found",
    });
  const refreshToken = cookies.TaskListJwt;

  //?Is refreshToken in db?
  const findUser = await User.findOne({
    refreshToken: refreshToken,
  });
  //? if refreshToken found in cookies but not in database.Could be hacker leaked a rt from cookie
  if (!findUser) {
    return res.status(403).json({
      message: "Not Authorized",
    });
  }
  //?verify jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || findUser.id !== decoded.id)
      return res.status(403).json({
        message: "Invalid access token",
      });
    const accessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    return res.status(200).json({
      accessToken: accessToken,
      message: "Access token updated successfully",
    });
  });
}
module.exports = { handleRegister, handleSignin, handleSignout,handleUpdateAT };
