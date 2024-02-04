const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel")
const validation = require("express-validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


//@desc Register the users
//@route POST /api/users/register
//Access public
const registerUser = asyncHandler(async (req, res) => {
    const error = validation.validationResult(req);
    if (!error.isEmpty()) {
        return res.status(401).json({
            success: false,
            error: error.errors
        });
    }
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashpassword;
    Users.register(req.body).then((result) => {
        console.log(result)
        res.status(200).json({ message: result })
    }).catch((err) => {

        console.log({ error: err })
        res.status(400).json({ message: err })

    });;

})

//@desc Login the user
//@route POST /api/users/login
//Access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const error = validation.validationResult(req);
    if (!error.isEmpty()) {
        return res.status(401).json({
            success: false,
            error: error.errors
        });
    }
    const user = await Users.findOne(email);
    if (user.data.length > 0) {
        console.log(password, user.data[0].password)
        let isMatch = await bcrypt.compare(password, user.data[0].password);
        if (isMatch) {
            const accessToken = jwt.sign(
                {
                    user: {
                        id: user.data[0].user_id,
                        name: user.data[0].name,
                        email: user.data[0].email
                    }
                },
                process.env.ACCESS_TOKEN_SECERT,
                {
                    expiresIn: "1h"
                }
            )

            return res.status(200).json({
                success: true,
                accessToken: accessToken,
                message: 'login seccessfully!'
            });
        } else {
            return res.status(401).json({
                success: false,
                error: 'Your Password is wrong!'
            });
        }
    } else {
        return res.status(401).json({
            success: false,
            error: 'Invalid credentials'
        });
        // throw new Error('Invalid credentials')
    }

})


//@desc Import users
//@route POST /api/users/import
//Access Private
const importUsers = asyncHandler(async (req, res) => {
    try {
      const users = req.body.users;
  
      // Assuming users is an array of objects with name, email, and password properties
      const hashedUsers = await Promise.all(
        users.map(async (user) => {
          const hashpassword = await bcrypt.hash(user.password, 10);
          return { ...user, password: hashpassword };
        })
      );
  
      const result = await Users.insertMany(hashedUsers);
  
      res.status(201).json({ message: 'Users imported successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//@desc Current user info
//@route POST /api/users/current
//Access Private
const currentUser = asyncHandler(async (req,res)=>{
    console.log("user details!")
    res.json({message:req.user});

})


module.exports = {
    registerUser, loginUser,currentUser,importUsers
}