import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const expenseSchema = new mongoose.Schema(
    {
        transactionId: {
            type: String,
            required: true,
            unique: true,
            default: uuidv4,
        }, created_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        type: {
            type: String,
            required: true,
            enum: ['income', 'expense'],
            default: 'expense',
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
            enum: ['cash', 'bank', 'other'],
            default: 'other',
        },

    },
    {
        timestamps: true,
    }
);

export const Expense = mongoose.model('Expense', expenseSchema);
