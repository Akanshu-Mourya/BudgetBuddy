import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from 'validator';
import { OAuth2Client } from "google-auth-library";


export const register = async (req, resp) => {
    try {
        const { fullName, email, phoneNumber, password, isGoogleUser, googleSub } = req.body;
        // console.log(req.body);

        // Check required fields
        if (!email) {
            return resp.status(400).json({
                message: "Email is required",
                success: false,
            });
        }

        // Handle Google User Registration
        if (isGoogleUser) {
            const existingGoogleUser = await User.findOne({ email });

            if (existingGoogleUser) {
                return resp.status(409).json({
                    message: "Google user already exists with this email",
                    success: false,
                });
            }

            // Save Google user in DB
            await User.create({
                fullName,
                email,
                googleSub, // Google unique identifier (sub)
                isGoogleUser: true,
            });

            return resp.status(201).json({
                message: "Google user registered successfully",
                success: true,
            });
        }

        // Handle Traditional Registration
        if (!fullName || !phoneNumber || !password) {
            return resp.status(400).json({
                message: "All fields are required for traditional signup",
                success: false,
            });
        }

        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return resp.status(400).json({
                message: "Invalid phone number",
                success: false,
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(409).json({
                message: "User already exists with this email",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
        });

        return resp.status(201).json({
            message: "User registered successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error:", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const login = async (req, resp) => {
    try {
        const { email, password, googleToken } = req.body;
        if (googleToken) {
            // Google Authentication
            const ticket = await client.verifyIdToken({
                idToken: googleToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();

            // Find user by email
            const user = await User.findOne({ email: payload.email });

            if (!user) {
                return resp.status(400).json({
                    message: "No user found with this email. Please register first.",
                    success: false,
                });
            }

            // Generate JWT token for Google login
            const tokenData = { userId: user._id };
            const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

            const userResponse = {
                _id: user._id,
                fullname: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
            };

            return resp.status(200).cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
            }).json({
                message: `Welcome back, ${userResponse.fullname}!`,
                user: userResponse,
                success: true,
            });
        } else {
            // Traditional Email/Password Login
            if (!email || !password) {
                return resp.status(400).json({
                    message: "Something is missing",
                    success: false,
                });
            }

            const user = await User.findOne({ email });
            if (!user) {
                return resp.status(400).json({
                    message: "Incorrect email",
                    success: false,
                });
            }

            // Check Password
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return resp.status(400).json({
                    message: "Incorrect password",
                    success: false,
                });
            }

            // Generate JWT token for traditional login
            const tokenData = { userId: user._id };
            const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

            const userResponse = {
                _id: user._id,
                fullname: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
            };

            return resp.status(200).cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
            }).json({
                message: `Welcome back, ${userResponse.fullname}!`,
                user: userResponse,
                success: true,
            });
        }
    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


export const logout = async (req, resp) => {
    try {
        return resp.status(200).cookie("token", "", { maxAge: 0 }).json({

            message: "Logged out successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

// Edit Profile System aayega

export const updateProfile = async (req, resp) => {
    try {
        const { fullName, email, phoneNumber } = req.body;
        // console.log(req.body);

        const userId = req.userId;


        let user = await User.findById(userId);

        if (!user) {
            return resp.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        if (email && !validator.isEmail(email)) {
            return resp.status(400).json({
                message: "Invalid email format",
                success: false,
            });
        }

        if (phoneNumber && !/^[6-9][0-9]{9}$/.test(phoneNumber)) {
            return resp.status(400).json({
                message: "Invalid phone number",
                success: false,
            });
        }

        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return resp.status(409).json({
                    message: "Email is already taken by another user",
                    success: false,
                });
            }
        }

        // Update user fields
        if (fullName) user.fullName = fullName.trim();
        if (email) user.email = email.trim();
        if (phoneNumber) user.phoneNumber = phoneNumber.trim();

        await user.save();

        const updatedUser = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };

        return resp.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser,
            success: true,
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};
