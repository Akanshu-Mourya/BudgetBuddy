import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const incomeSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true,
        default: uuidv4,
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        required: true,
        // enum: ['income', 'expense'],
        default: 'income',
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },
    paymentMethod: {
        type: String,
        // enum: ['Cash', 'Bank','UPI', 'Other'],
        // default: 'Other',
        require:true
    }
}, { timestamps: true });
export const Income = mongoose.model('Income', incomeSchema);
