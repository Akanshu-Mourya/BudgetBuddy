import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { addBorrow } from "../controller/borrow.controller.js";
const router = express.Router();
router.route("/addBorrow").post(isAuthenticated, addBorrow);
export default router;