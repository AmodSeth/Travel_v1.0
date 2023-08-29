import mongoose from "mongoose";

const UserSchema_updated = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: Number,
        unique: true,
        required: true
},
    email: { type: String,unique: true, required: true },
    password: { type: String,unique: true, required: true },
}
    ,

    { timestamps: true }
)


const User = mongoose.model("User_updated", UserSchema_updated);

export default  User;