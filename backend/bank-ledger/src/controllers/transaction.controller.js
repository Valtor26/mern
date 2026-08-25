const transactionModel = require("../models/transaction.model")
const accountModel = require("../models/account.model")
const ledgerModel = require("../models/ledger.model")
const emailService = require("../services/email.service")
const mongoose = require("mongoose")

/*
    This controller is used to create a transaction
*/ 

/**
 * - Create a new transaction
 * THE 10-STEP PROCESS:
 * 1. Validate request body
 * 2. Validate idempotency key
 * 3. Check account status
 * 4. Derive sender balance from ledger
 * 5. Create transaction (PENDING)
 * 6. Create DEBIT ledger entry
 * 7. Create CREDIT ledger entry
 * 8. Mark transaction as COMPLETED
 * 9. Commit MongoDB session
 * 10. Send email notification
 */

async function createTransaction(req, res) {

    // validate request body
    const {fromAccount, toAccount, amount, idempotencyKey} = req.body

    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
        return res.status(400).json({
            message: "fromAccount, toAccount, amount and idempotencyKey are required"
        })
    }

    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount
    })

    const toUserAccount = await accountModel.findOne({
        _id: toAccount
    })

    if(!fromUserAccount || !toUserAccount){
        return res.status(400).json({
            message: "fromAccount and toAccount must be valid account ids"
        })
    }


    // validate idempotency key

    const isTransactionAlreadyExists = await transactionModel.findOne({
        idempotencyKey: idempotencyKey
    })

    if(isTransactionAlreadyExists){
        if(isTransactionAlreadyExists.status === 'COMPLETED'){
            return res.status(200).json({
                message: "Transaction already processed",
                transaction: isTransactionAlreadyExists
            })
        }
        if(isTransactionAlreadyExists.status === 'FAILED'){
            return res.status(500).json({
                message: "Transaction processing failed, please try again"
            })
        }
        if(isTransactionAlreadyExists.status === 'REVERSED'){
            return res.status(500).json({
                message: "Transaction was reversed, please try again"
            })
        }
        if(isTransactionAlreadyExists.status === 'PENDING'){
            return res.status(200).json({
                message: "Transaction is still processing"
            })
        }
    }

    // Check account status

    if(fromUserAccount.status !== 'ACTIVE' || toUserAccount.status !== 'ACTIVE'){
        return res.status(400).json({
            message: "Both fromAccount and toAccount must be ACTIVE to process transaction"
        })
    }


    // Derive sender balance from ledger

    const balance = await fromUserAccount.getBalance()

    if(balance < amount){
        return res.status(400).json({
            message: `Insufficient balance, Current balance is ${balance}. Required amount is ${amount}`
        })
    }

    let transaction;

    try{

    // Create transaction (PENDING)

    const session = await mongoose.startSession()
    session.startTransaction() 

    transaction = (await transactionModel.create([{
        fromAccount: fromUserAccount._id,
        toAccount,
        amount,
        idempotencyKey,
        status: 'PENDING'
    }], {session}))[0];


    const debitLedgerEntry = await ledgerModel.create([{
        account: fromAccount,
        amount: amount,
        transaction: transaction._id, 
        type: 'DEBIT'
    }], {session});

    await (()=>{
        return new Promise((resolve) => setTimeout(resolve, 15 * 1000)) // wait for 15 seconds
    })()

    const creditLedgerEntry = await ledgerModel.create([{
        account: toAccount,
        amount: amount,
        transaction: transaction._id,
        type: 'CREDIT'
    }], {session});

    await transactionModel.findOneAndUpdate({_id: transaction._id}, {status: 'COMPLETED'}, {session}) // update transaction status

    await session.commitTransaction()
    session.endSession()
    } catch(error){
        return res.status(400).json({
            message: "Transaction is Pending due to some issue, please try again after sometime"
        })
    }
    // Send email notification

    await emailService.sendTransactionEmail(req.user.email, req.user.name, amount, toUserAccount)

    return res.status(201).json({
        message: "Transaction created successfully",
        transaction
    })
}

async function createInitialFundsTransaction(req, res){
    const {toAccount, amount,idempotencyKey} = req.body

    if(!toAccount || !amount || !idempotencyKey){
        return res.status(400).json({
            message: "toAccount, amount and idempotencyKey are required"
        })
    }

    const toUserAccount = await accountModel.findOne({
        _id: toAccount
    })

    if(!toUserAccount){
        return res.status(400).json({
            message: "toAccount must be valid account id"
        })
    }

    const fromUserAccount = await accountModel.findOne({
        user: req.user._id
    })

    if(!fromUserAccount){
        return res.status(400).json({
            message: "System user account not found"
        })
    }

    const session = await mongoose.startSession()
    session.startTransaction() 

    const transaction = new transactionModel({
        fromAccount: fromUserAccount._id,
        toAccount,
        amount,
        idempotencyKey,
        status: 'PENDING'
    })

    const debitLedgerEntry = await ledgerModel.create([{
        account: fromUserAccount._id,
        amount: amount,
        transaction: transaction._id, 
        type: 'DEBIT'
    }], {session});

    const creditLedgerEntry = await ledgerModel.create([{
        account: toAccount,
        amount: amount,
        transaction: transaction._id,
        type: 'CREDIT'
    }], {session});

    transaction.status = 'COMPLETED'
    await transaction.save({session})

    await session.commitTransaction()
    session.endSession()

    return res.status(201).json({
        message: "Initial funds transaction completed successfully",
        transaction: transaction
    })
}

module.exports = {
    createTransaction,
    createInitialFundsTransaction
}