import { Borrow } from "../models/borrow.model.js";

export const addBorrow = async (req, resp) => {
    try {
        const { lenderName, interestType, amount, interestRate, timePeriod, dueDate, paidAmount, status } = req.body;

        console.log("Request Body:", req.body);
        const userId = req.userId;

        if (!lenderName || !interestType || !amount || !interestRate || !timePeriod || !dueDate || paidAmount === undefined || status === undefined) {
            return resp.status(400).json({
                message: "All fields are required. Please fill in all details.",
                success: false,
            });
        }

        let TotalAmount = 0;

        if (interestType === 'simple') {
            let simpleInterest = (amount * interestRate * timePeriod) / 100;
            TotalAmount = amount + simpleInterest;
        } else if (interestType === 'compound') {
            TotalAmount = amount * Math.pow(1 + (interestRate / 100), timePeriod);
        } else {
            return resp.status(400).json({
                message: "Invalid interest type. Please choose 'simple' or 'compound'.",
                success: false,
            });
        }

        let Total = Math.max(Math.floor(TotalAmount) - paidAmount, 0); // Ensuring non-negative value
        console.log(`Calculated Total Amount (with interest): ${TotalAmount}`);
        console.log(`Final Total Amount after Paid Amount deduction: ${Total}`);

        const borrow = await Borrow.create({
            borrower: userId,
            lenderName,
            amount,
            interestType,
            interestRate,
            timePeriod,
            dueDate,
            totalAmount: Total,
            paidAmount,
            status,
        });

        console.log("Borrow Data Saved:", borrow);

        return resp.status(201).json({
            message: "Borrow record added successfully.",
            borrow,
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


export const getBorrowByID = async (req, resp) => {
    try {
        const userId = req.userId;
        // console.log(userId);
        if (!userId) {
            return resp.status(400).json({
                message: "User ID is missing. Please provide a valid User ID.",
                success: false,
            });
        }

        const borrow = await Borrow.find({ borrower: userId });
        if (!borrow || !borrow.length === 0) {
            return resp.status(404).json({
                message: "No borrow records found.",
                success: false,
            });
        }
        return resp.status(200).json({
            message: "Borrow records retrieved successfully.",
            borrow,
            success: true,
        });

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const updateBorrow = async (req, resp) => {
    try {
        const { lenderName, amount, interestType, interestRate, timePeriod, dueDate, paidAmount, status } = req.body;
        // console.log("Request Body:", req.body);
        // console.log("Borrow ID:", req.params.id);
        let Total = 0;

        if (interestType === 'simple') {
            let simpleInterest = (amount * interestRate * timePeriod) / 100;
            Total = amount + simpleInterest;
        } else if (interestType === 'compound') {
            Total = amount * Math.pow(1 + (interestRate / 100), timePeriod);
        } else {
            return resp.status(400).json({
                message: "Invalid interest type. Choose 'simple' or 'compound'.",
                success: false,
            });
        }

        let TotalAmount = Math.max(Math.floor(Total) - paidAmount, 0);

        console.log(`Calculated Total Amount (with interest): ${Total}`);
        console.log(`Final TotalAmount (after deduction of paidAmount): ${TotalAmount}`);

        const updateData = {
            lenderName,
            amount,
            interestType,
            interestRate,
            timePeriod,
            dueDate,
            totalAmount: TotalAmount,
            paidAmount,
            status
        };

        const BorrowData = await Borrow.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!BorrowData) {
            return resp.status(404).json({
                message: "Borrow record not found.",
                success: false,
            });
        }

        console.log("Updated Borrow Data:", BorrowData);

        return resp.status(200).json({
            message: "Borrow record updated successfully.",
            BorrowData,
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

export const borrowDelete = async (req, resp) => {
    try {
        const deletedBorrow = await Borrow.findByIdAndDelete(req.params.id);
        if (!deletedBorrow) {
            return resp.status(404).json({
                message: "Borrow record not found.",
                success: false,
            });
        }

        return resp.status(200).json({
            message: "Borrow record deleted successfully.",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
}

export const calculateTotalBorrow = async (req, resp) => {
    try {
        const userId = req.userId;
        const userBorrow = await Borrow.find({ borrower: userId });

        if (!userBorrow || userBorrow.length === 0) {
            return resp.status(404).json({
                message: "No borrow records found for this user.",
                success: false
            });
        }

        let totalBorrow = userBorrow.reduce((sum, borrow) => sum + (borrow.amount || 0), 0);

        return resp.status(200).json({
            message: "Total borrowed amount calculated successfully.",
            totalBorrow,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

// status check vale part ko ui ke time par hi implement karna hai

// export const checkStatus=async(req,resp)=>{
    
// }