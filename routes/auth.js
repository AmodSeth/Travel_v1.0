import express from "express";
import { getRegisterAuth,getLoginAuth } from "../Controllers/Auth.controller.js";


const router = express.Router();

router.route("/register").post(getRegisterAuth)
router.route("/login").post(getLoginAuth)


// //{
//  "username" : "test4",
//  "number": 123456789,
//  "email": "test4@gmail.com",
//  "password": "test4@1234"
// }



export default router;