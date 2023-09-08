import mongoose from 'mongoose';

const wishListSchema = new mongoose.Schema({
    hotelId: { type: String, required: true },
});

const Wishlist = mongoose.model("Wishlist", wishListSchema);

export default Wishlist;