const express = require("express");
const {  handleSignin, handleRegister, handleSignout, handleUpdateAT } = require("../controllers/auth.controller");

const router = express.Router();

//register new user after verification
router.post("/register", handleRegister);

//sign in
router.post("/signin", handleSignin);

//sign out
router.post("/signout", handleSignout);

//update Access token
router.get("/updateAT", handleUpdateAT);

module.exports = router;
