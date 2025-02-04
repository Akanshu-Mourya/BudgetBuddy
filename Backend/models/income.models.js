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
        enum: ['income', 'expense'],
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
        enum: ['cash', 'bank', 'other'],
        default: 'other',
    }
}, { timestamps: true });

// incomeSchema.pre("save", async function (next) {
//     if (!this.isNew) return next();
//     try {
//         const lastRecord = await mongoose.model('Income').findOne().sort({ transactionId: -1 });
//         this.transactionId = lastRecord ? lastRecord.transactionId + 1 : 1;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

export const Income = mongoose.model('Income', incomeSchema);
