import express from "express";
import { getWishlist, wishlistRouter, wishlistRouterDelete } from "../controllers/Wishlist.controller.js";
import { verifyUser } from "../middleware/verfiyuser.js";

const router = express.Router();

router.route("/").post(verifyUser,wishlistRouter);
router.route("/:id").delete(verifyUser,wishlistRouterDelete);
router.route("/").get(verifyUser,getWishlist);

export default router;