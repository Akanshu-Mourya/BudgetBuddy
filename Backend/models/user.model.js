
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            required: function () {
                return this.isGoogleUser === false; // Only required if not a Google user
            },
        },
        password: {
            type: String,
            required: function () {
                return this.isGoogleUser === false; // Only required if not a Google user
            },
        },
        isGoogleUser: {
            type: Boolean,
            default: false, // Default to false for traditional users
        },
        googleSub: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
