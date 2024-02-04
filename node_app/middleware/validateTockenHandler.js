const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
require('dotenv').config()

// Protect routes

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {            
            if (err) {
                return res.status(403).send({ error: true, message: "You are not authorized to access this route" })
            } else {
                req.user = decoded.user;
                console.log(req.user, "req.user decoded!")
                next();
            }
        })
    } else {
        return res.status(403).send({ error: true, message: "Unauthorized" })
    }
})

module.exports = validateToken;

