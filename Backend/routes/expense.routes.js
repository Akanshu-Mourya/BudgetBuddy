import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { addExpense, getExpenseByUserId, updateExpense, deleteExpense, calculateTotalExpense } from "../controller/expense.controller.js";

const router = express.Router();
router.route("/addExpense").post(isAuthenticated, addExpense);
router.route("/getExpense/:id").get(isAuthenticated, getExpenseByUserId);
router.route("/updateExpense/:id").put(isAuthenticated, updateExpense);
router.route("/deleteExpense/:id").delete(isAuthenticated, deleteExpense);
router.route("/getTotal").get(isAuthenticated, calculateTotalExpense)
export default router;