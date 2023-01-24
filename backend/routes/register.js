// This is how the front-end is communicating with the back-end. Different from front-end routes.

const router = require('express').Router();
let BankAccount = require('../models/bank-account.model');
let User = require('../models/user.model');

// Find all the users currently in the database.
router.route('/').get((req, res) =>
{
    User.find().then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// This database route is used specifically for the Register Page (as seen in src/components/RegisterAccountPage.js).
// This is how the data is being pushed to the database.
router.route('/add').post((req, res) => 
{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const accounts = 
    [
        new BankAccount({id: Math.floor(100000 + Math.random() * 900000)})
    ]

    const newUser = new User(
        {
            firstName,
            lastName,
            email,
            password,
            accounts
        }
    );

    newUser.save().then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Find a user by their specific MongoDB generated ID.
router.route('/:id').get((req, res) =>
{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a user that matches the specific MongoDB generated ID.
router.route('/:id').delete((req, res) =>
{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a user's first name and last name by their specific MongoDB generated ID (can make it change other things by adding more).
router.route('/update/:id').post((req, res) =>
{
    User.findById(req.params.id)
        .then(user => 
            {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;

                user.save()
                    .then(() => res.json('User updated!'))
                    .catch(() => res.status(400).json('Error: ' + err));
            })
});

module.exports = router;