import express from "express";
import { getHotelCategory,getSingleHotel } from "../Controllers/Hotels.controller.js";


const router = express.Router();


router.get("/", getHotelCategory);
router.get("/:id", getSingleHotel);




export default router;