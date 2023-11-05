const express = require("express");
const { handleGetUser } = require("../controllers/user.controller");
const verifyJWT = require("../middlewares/verifyJWT");


const router = express.Router();

//get user
router.get("/",verifyJWT, handleGetUser);



module.exports = router;
