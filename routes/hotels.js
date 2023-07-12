import express from "express";
import { getHotelCategory, getHotelData } from "../Controllers/Hotels.controller.js";


const router = express.Router();


router.get("/", getHotelCategory);
router.get("/getHoteldata", getHotelCategory);




export default router;