import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { addIncome, incomeDelete, getIncomeByUserId, updateIncome, calculateTotalIncome } from "../controller/income.controller.js";

const router = express.Router();
router.route("/addIncome").post(isAuthenticated, addIncome);
router.route('/getIncome/:id').get(isAuthenticated, getIncomeByUserId);
router.route('/updateIncome/:id').put(isAuthenticated, updateIncome);
router.route('/deleteIncome/:id').delete(isAuthenticated, incomeDelete);
router.route('/getTotal').get(isAuthenticated, calculateTotalIncome);
export default router;