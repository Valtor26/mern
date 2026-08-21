const mongoose = require('mongoose');


const accountSchema = new mongoose.Schema({
    user:{ // belongs to which user
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: [true, "Account must be associated with a user"],
        index: true // for fast lookup
    },
    status:{ // status of account
        type: String,
        enum: {
            values: ['ACTIVE','FROZEN','CLOSED'],
            message: "Status can be either ACTIVE, FROZEN or CLOSED",
        },
        default: 'ACTIVE'
    },
    currency:{ // currency of account
        type:String,
        required: [true, "Currency is required"],
        default: 'INR'
    },
}, {
    timestamps: true
})

accountSchema.index({user:1, status:1}); // index on user and status, compound index is created because of the combination of both

const accountModel = mongoose.model('account', accountSchema);

module.exports = accountModel;