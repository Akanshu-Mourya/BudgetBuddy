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
                return this.isGoogleUser === false; 
            },
        },
        password: {
            type: String,
            required: function () {
                return this.isGoogleUser === false; 
            },
        },
        isGoogleUser: {
            type: Boolean,
            default: false, 
        },
        googleSub: {
            type: String,
            unique: true,
            sparse: true, 
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
