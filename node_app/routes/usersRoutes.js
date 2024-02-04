const express = require("express");
const router = express.Router();
const controller = require("../contactController/userController")
const validation = require("express-validator")
var usersValidation = require("../validation/users");
var validateToken = require("../middleware/validateTockenHandler")

router.post("/register", usersValidation.register, controller.registerUser);
router.post("/login",usersValidation.login, controller.loginUser)
router.get("/currentUser",validateToken, controller.currentUser)
router.post('/import', validateToken, usersValidation.import, controller.importUsers);
router.get("/current", (req, res) => {
    res.json({ message: "current the user" });
})














module.exports = router;