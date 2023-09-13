//add a wishlist router
import  Wishlist  from "../Models/WishlistModel.js";

export const wishlistRouter = async (req, res) => { 

    //we need to create a wishist object
    const newWishlist =  new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json({
            savedWishlist,
            message: "Wishlist added successfully"
        });
        
    } catch (error) {
        res
        .status(404)
        .json({ message: error.message });
    }



}


//needs to check 
export const wishlistRouterDelete = async (req, res) => { 
    
    try {
        await Wishlist.findByIdAndDelete(
            req.params.id
        );
        res.status(201).json({
            message: "Wishlist deleted successfully"
        });

    
} catch (error) {
    res
        .status(500)
        .json({ message: error.message });
}

}

export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.find();
        wishlist? res.json(wishlist):json({message: "No wishlist found"});

    } catch (error) {
        res
        .status(500)
        .json({ message: error.message });
    }

 }
