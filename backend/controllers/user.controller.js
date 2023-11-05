const User = require("../models/user.model");
const logger = require("../utils/logger");

const handleGetUser = async (req, res) => {
  try {
    const id = req.id;

    const findUser = await User.findOne({
      _id: id,
    });

    if (!findUser) {
      return res.status(401).json({
        message: "Email or Password doesn't match with any account",
      });
    }
    return res.status(200).json({
      username: findUser.username,
      email: findUser.email,
      image: findUser.image,
      role: findUser.role,
    });
  } catch (error) {
    logger.error(error);
    res.json({
      error: error.message,
      message: "Something went wrong",
    });
  }
};
module.exports = { handleGetUser };
