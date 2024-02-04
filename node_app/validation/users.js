const validation = require("express-validator")
const Users = require("../models/userModel")
usersValidation = {};

usersValidation.import = [
    validation.check('users')
        .isArray({ min: 1 }).withMessage('At least one user should be provided for import.'),
    validation.check('users.*.username')
        .notEmpty().withMessage('Username is required.')
        .trim()
        .isLength({ min: 3, max: 16 }).withMessage('Username must be between 3 and 16 characters.'),
    validation.check('users.*.email')
        .notEmpty().withMessage('Email is required.')
        .isEmail().withMessage('Invalid email format.')
        .trim()
        .custom(async (value) => {
            const existingUser = await Users.findOne(value);
            if (existingUser.data.length > 0) {
                throw new Error(`A user already exists with this ${value} address`);
            }
        }),
    validation.check('users.*.password')
        .notEmpty().withMessage('Password is required.')
        .trim()
        .isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters.'),
    validation.check('users.*.name')
        .notEmpty().withMessage('Name is required.')
        .trim()
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters.'),
    validation.check('users.*.user_type')
        .notEmpty().withMessage('User type is required.')
        .trim(),
];

usersValidation.register =
    [
        validation.check('username')
            .notEmpty().withMessage('Username is required.')
            .trim()
            .isLength({ min: 3, max: 16 }).withMessage('Username must be between 3 and 16 characters.'),

        validation.check('email')
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Invalid email format.')
            .trim().custom(async value => {
                const existingUser = await Users.findOne(value);
                if (existingUser.data.length > 0) {
                    throw new Error(`A user already exists with this ${value} address`);
                }
            }),

        validation.check('password')
            .notEmpty().withMessage('Password is required.')
            .trim()
            .isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters.')
        ,
        validation.check('name')
            .notEmpty().withMessage('Name is required.')
            .trim()
            .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters.'),

        validation.check('user_type')
            .notEmpty().withMessage('User type is required.')
            .trim()

    ];

usersValidation.login =
    [

        validation.check('email')
            .notEmpty().withMessage('Email is required.')
            .isEmail().withMessage('Invalid email format.')
            .trim(),

        validation.check('password')
            .notEmpty().withMessage('Password is required.')
            .trim(),
    ];

module.exports = usersValidation;