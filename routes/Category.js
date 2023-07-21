import express from "express";
import { getCatergory } from "../Controllers/Category.controller.js";




const router = express.Router();


router.get("/",getCatergory)


export default router;