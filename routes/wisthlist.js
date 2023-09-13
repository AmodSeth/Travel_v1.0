import express from "express";
import { getWishlist, wishlistRouter, wishlistRouterDelete } from "../controllers/Wishlist.controller.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

router.route("/").get(verifyUser,getWishlist);
router.route("/").post(wishlistRouter);
router.route("/:id").delete(wishlistRouterDelete);


/*http://localhost:5000/apiv1/wishlist/6501a53125ebcf189d777884 */

export default router;