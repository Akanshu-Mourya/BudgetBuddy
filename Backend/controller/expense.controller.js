import { Expense } from "../models/expense.model.js";
export const addExpense = async (req, resp) => {
    try {
        const { type, category, amount, date, description, paymentMethod } = req.body;

        const userId = req.userId;
        console.log(req.body);
        if (!category || !amount || !date || !description || !paymentMethod) {
            return resp.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        const expense = await Expense.create({
            type,
            category,
            amount,
            date,
            description,
            paymentMethod,
            created_by: userId
        });

        return resp.status(201).json({
            message: "New Expense added successfully",
            expense,
            success: true,
        });

    } catch (error) {
        console.error("Error in addExpense:", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const getExpenseByUserId = async (req, resp) => {
    try {
        const userId = req.userId;
        console.log(userId);

        if (!userId) {
            return resp.status(400).json({
                message: "User ID is required",
                success: false,
            });
        }
        const expense = await Expense.find({ created_by: userId });
        if (!expense || expense.length === 0) {
            return resp.streatus(404).json({
                message: "No expense records found for this user",
                success: false,
            });
        }
        return resp.status(200).json({
            message: "Expense records fetched successfully",
            expense,
            success: true,

        });

    } catch (error) {
        console.log("Error fetching expense by user id", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,

        });
    }
}

export const updateExpense = async (req, resp) => {
    try {
        const { category, amount, date, description, paymentMethod } = req.body;
        console.log(req.body);
        console.log(req.params.id);

        const updateData = { category, amount, date, description, paymentMethod }
        const expense = await Expense.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!expense) {
            return resp.status(404).json({
                message: "Expense not found",
                success: false,
            });
        }
        return resp.status(200).json({
            message: "Expense updated successfully",
            success: true,
        });
    } catch (error) {
        console.log("Error updating expense by user id", error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });

    }
}

export const deleteExpense = async (req, resp) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        if (!deletedExpense) {
            return resp.status(404).json({
                message: "Expense not found",
                success: false
            });
        }

        return resp.status(200).json({
            message: "Expense deleted Successfully...",
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

export const calculateTotalExpense = async (req, resp) => {
    try {
        const userId = req.userId;
        // console.log(userId);

        const userExpenses = await Expense.find({ created_by: userId });
        if (!userExpenses || userExpenses.length === 0) {
            return resp.status(404).json({
                message: "No expense found",
                success: false
            });
        }
        const totalExpense = userExpenses.reduce((sum, expense) => sum + (expense.amount || 0), 0);
        return resp.status(200).json({
            message: "Total Expense calculated successfully",
            totalExpense,
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



