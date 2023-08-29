import express from "express";
import { getRegisterAuth,getLoginAuth } from "../Controllers/Auth.controller.js";


const router = express.Router();

router.route("/register").post(getRegisterAuth)
router.route("/login").post(getLoginAuth)


export default router;