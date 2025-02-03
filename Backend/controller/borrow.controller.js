import { Borrow } from "../models/borrow.model.js";

export const addBorrow = async (req, resp) => {
    try {
        const { lenderName, interestType, amount, interestRate, timePeriod, dueDate, paidAmount, status } = req.body;


        console.log(req.body);
        const userId = req.userId;
        if (!lenderName || !interestType || !amount || !interestRate || !timePeriod || !dueDate || !paidAmount || !status) {
            return resp.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        
        //totalAmount simpleInterest or compoundInterest ke according calculation

        let TotalAmount = 0;
        if (interestType === 'simple') {
            let simpleInterest = (amount * interestRate * timePeriod) / 100;
            TotalAmount = amount + simpleInterest;
            // console.log(TotalAmount);

        } else if (interestType === 'compound') {
            TotalAmount = amount * Math.pow(1 + (interestRate / 100), timePeriod);
            // console.log(Math.floor(TotalAmount));
        }

        let Total = (Math.floor(TotalAmount) - paidAmount);

        // console.log(Total);

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
        return resp.status(201).json({
            message: "New Borrow added successfully",
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