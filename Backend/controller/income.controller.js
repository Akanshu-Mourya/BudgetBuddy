import { Income } from '../models/income.models.js';
import jwt from 'jsonwebtoken';
export const addIncome = async (req, resp) => {
    try {
        const { category, amount, date, description, paymentMethod } = req.body;
        // console.log(token);
        // const decode = jwt.decode(token);
        // console.log(decode.userId);

        const userId = req.userId;

        console.log(req.body);

        if (!category || !amount || !date || !description || !paymentMethod) {
            return resp.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const income = await Income.create({
            category,
            amount,
            date,
            description,
            paymentMethod,
            created_by: userId,
        });

        return resp.status(201).json({
            message: "New Income added successfully",
            income,
            success: true,
        });

    } catch (error) {
        console.error("Error in addIncome:", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export const getIncomeByUserId = async (req, resp) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return resp.status(400).json({
                message: "User ID is required",
                success: false,
            });
        }

        const income = await Income.find({ created_by: userId });
        // console.log(income);

        if (!income || income.length === 0) {
            return resp.status(404).json({
                message: "No income records found for this user",
                success: false,
            });
        }

        return resp.status(200).json({
            message: "Income records fetched successfully",
            income,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching income by user ID:", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export const updateIncome = async (req, resp) => {
    try {
        const { category, amount, date, description, paymentMethod } = req.body;
        // console.log(req.body);

        const updateData = { category, amount, date, description, paymentMethod };
        const income = await Income.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!income) {
            return resp.status(404).json({
                message: "Income not found",
                success: false
            })
        }
        return resp.status(200).json({
            message: "Income information updated...",
            income,
            success: true
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const incomeDelete = async (req, resp) => {
    try {
        const deletedIncome = await Income.findByIdAndDelete(req.params.id);
        if (!deletedIncome) {
            return resp.status(404).json({
                message: "Income not found",
                success: false
            });
        }

        return resp.status(200).json({
            message: "Income deleted Successfully...",
            success: true
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}


export const calculateTotalIncome = async (req, resp) => {
    try {
        const userId = req.userId;

        const userIncomes = await Income.find({ created_by: userId });

        if (!userIncomes || userIncomes.length === 0) {
            return resp.status(404).json({
                message: "No income found",
                success: false
            });
        }

        let totalIncome = userIncomes.reduce((sum, user) => sum + (user.amount || 0), 0);

        return resp.status(200).json({
            message: "Total income calculated successfully",
            totalIncome,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "An error occurred while calculating total income",
            success: false,
        });
    }
};