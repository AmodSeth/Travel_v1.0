import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    number: { type: Number, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
})


const User = mongoose.model("User", UserSchema);

export default  User;