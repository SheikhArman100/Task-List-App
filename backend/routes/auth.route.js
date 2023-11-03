const express = require("express");
const {  handleSignin, handleRegister } = require("../controllers/auth.controller");

const router = express.Router();

//register new user after verification
router.post("/register", handleRegister);

//sign in
router.post("/signin", handleSignin);

// //sign out
// router.get("/signout", handleSignout);

// //update Access token
// router.get("/updateAT", updateAccessToken);

module.exports = router;
