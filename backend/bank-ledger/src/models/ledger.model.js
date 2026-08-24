const mongoose = require('mongoose');

/**
 * Ledger schema: this schema is used to store the ledger entries
 * Ledger entries are immutable and cannot be modified or deleted
 */

const ledgerSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: [true, 'Ledger must be associated with an account'],
        index: true,
        immutable: true
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required for creating a ledger'],
        immutable: true
    },
    transaction:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'transaction',
        required: [true, 'Transaction is required for creating a ledger'],
        index: true,
        immutable: true
    },
    type:{
        type: String,
        enum: {
            values: ['DEBIT', 'CREDIT'],
            message: "Type can be either DEBIT or CREDIT"
        },
        required: [true, 'Type is required for creating a ledger'],
        immutable: true
    }
});

function preventLedgerModification() { // prevents modification of ledger entries
    throw new Error("Ledger entries are immutable and cannot be modified or deleted");
}

ledgerSchema.pre('findOneAndUpdate', preventLedgerModification);
ledgerSchema.pre('updateOne', preventLedgerModification);
ledgerSchema.pre('deleteOne', preventLedgerModification);
ledgerSchema.pre('remove', preventLedgerModification);
ledgerSchema.pre('deleteMany', preventLedgerModification);
ledgerSchema.pre('updateMany', preventLedgerModification);
ledgerSchema.pre('findOneAndDelete', preventLedgerModification);
ledgerSchema.pre('findOneAndReplace', preventLedgerModification);

const ledgerModel = mongoose.model('ledger', ledgerSchema);