const accountModel = require("../models/account.model")

/*
    This controller is used to create an account for a user
*/ 

async function createAccountController(req, res) {
    const user = req.user

    const account = await accountModel.create({
        user: user._id, // only user id is required because other fields have default values
    })

    res.status(201).json({
        account
    })
}

module.exports = {
    createAccountController
}