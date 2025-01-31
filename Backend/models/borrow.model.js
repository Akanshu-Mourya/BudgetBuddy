import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    borrower:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    }, // Borrower ID
    lenderName:
    {
        type: String,
        required: true
    }, // Name of the lender
    amount:
    {
        type: Number,
        required: true
    }, // Total borrowed amount
    interestType:
    {
        type: String,
        enum: ["simple", "compound"],
        required: true
    },
    interestRate:
    {
        type: Number,
        required: true
    },
    // Interest rate in percentage
    borrowDate:
    {
        type: Date,
        default: Date.now
    },
    dueDate:
    {
        type: Date,
        required: true
    },
    paidAmount:
    {
        type: Number,
        default: 0
    }, // Amount repaid by borrower
    status:
    {
        type: String,
        enum: ["borrowed", "paid"],
        default: "borrowed"
    },
});


export const Borrow = mongoose.model('Borrow', borrowSchema);
