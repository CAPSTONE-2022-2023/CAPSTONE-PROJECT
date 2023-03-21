const router = require('express').Router();
let BankAccount = require('../models/bank-account.model');
let User = require('../models/user.model');


router.route('/sendMoney/:email').post(async (req, res) =>
{
    if (req.body === null || req.body === undefined)
    {
        return res.status(400).json("Error: No data in the body.");
    }

    const userEmailSendingMoney = req.params.email;
    const userEmailReceivingMoney = req.body.email;

    await User.findOne({email: userEmailSendingMoney})
    .then(user =>
        {
            if (user.accounts[0].balance < req.body.amount)
            {
                return res.status(400).json("Error: Not enough money in " + user.accounts[0].accType + " account.");
            }

            User.findOne({email: userEmailReceivingMoney})
            .then(recipient =>
                {
                    if (recipient.email === user.email)
                    {
                        return res.status(400).json("Error: You cannot send money to yourself.");
                    }

                    user.accounts[0] = new BankAccount(
                        {
                            id: user.accounts[0].id,
                            chequeId: user.accounts[0].chequeId,
                            accType: user.accounts[0].accType,
                            balance: user.accounts[0].balance - req.body.amount
                        }
                    );

                    recipient.accounts[0] = new BankAccount(
                        {
                            id: recipient.accounts[0].id,
                            chequeId: recipient.accounts[0].chequeId,
                            accType: recipient.accounts[0].accType,
                            balance: recipient.accounts[0].balance + req.body.amount
                        }
                    );

                    user.save();
                    recipient.save().then(() => res.json(user.firstName + " has sent $" + req.body.amount + " to " + recipient.firstName))
                    .catch(err => res.status(400).json('Error: ' + err));

                }).catch(err => res.status(400).json('Error: ' + err));
            
        }).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;