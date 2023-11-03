const express = require("express");
const { registerUser } = require("../controllers/auth.controller");

const router = express.Router();

//register new user after verification
router.post("/register", registerUser);

// //sign in
// router.get("/signin", handleSignin);

// //sign out
// router.get("/signout", handleSignout);

// //update Access token
// router.get("/updateAT", updateAccessToken);

module.exports = router;
