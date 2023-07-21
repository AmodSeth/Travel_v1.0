import express from "express";
import { getRegisterAuth } from "../Controllers/Auth.controller";


const router = express.Router();

router.route("/register").post(getRegisterAuth)