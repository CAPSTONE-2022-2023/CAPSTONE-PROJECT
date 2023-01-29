const router = require('express').Router();
const jwt = require('jsonwebtoken');

let User = require('../models/user.model');

// This route is used specifically for the Login Page (as seen in src/components/LoginAccountPage.js).
router.route('/').post(async (req, res) => 
{
    const email = req.body.email;
    const password = req.body.password;

    // Wait until a user that matches the email/password provided is found.
    const user = await User.findOne({email: email, password: password});

    // If a user is found in the database with the matching email/password.
    if (user) 
    {
        // Choose what data you want to send, which will then be inputted and encrypted in the JSON Web Token (JWT).
        // This is so when we decode the JWT after logging in, it will provide the necessary information.
        const token = jwt.sign(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                accounts: user.accounts
            }, 'v6jmSuatYPw5Njr6r4ANWWQq')

        return res.json({success: true, user: token})
    }
    else 
    {
        return res.json({sucess: false, user: false});
    }
});

module.exports = router;