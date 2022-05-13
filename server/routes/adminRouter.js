import express from "express";
import { loginUser } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route("/").post(loginUser);
// orderRouter.route('/').get(getOrders).post(setOrder);

export default adminRouter;
