import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    },
    // Borrower ID
    lenderName: {
        type: String,
        required: true
    },
    // Name of the lender
    amount: {
        type: Number,
        required: true
    },
    // Total borrowed amount
    interestType: {
        type: String,
        enum: ["simple", "compound"],
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    timePeriod: {
        type: String,
        required: true
    },
    // Interest rate in percentage
   
    dueDate: {
        type: Date,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }, // Amount repaid by borrower
    paidAmount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["borrowed", "partially paid", "paid", "overdue"],
        default: "borrowed"
    },
}, { timestamps: true });
export const Borrow = mongoose.model('Borrow', borrowSchema);
