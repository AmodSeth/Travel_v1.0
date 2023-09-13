import express from "express";
import hotelRoutes from "./routes/hotels.js"
import wishlist from "./routes/wisthlist.js";
import CategoryRoutes from "./routes/Category.js";
import AuthRouter from "./routes/auth.js";

import dotenv from "dotenv";
import mongoose from "mongoose";


/*data imports */
import Hotel from "./Models/Hotel.model.js";
// import Category from "./Models/Category.model.js";
import { hoteldata } from "./DATA/hotelData.js";
import { categories } from "./DATA/CategoryData.js";



const app = express();

dotenv.config();

app.use(express.json());


//routes handlers
app.use("/apiv1/hotel", hotelRoutes);
app.use("/apiv1/category", CategoryRoutes);
app.use("/apiv1/auth", AuthRouter);
app.use("/apiv1/wishlist", wishlist);




const PORT = 5000;

app.get("/", (req, res) => {
    res.send("amod seth");
  });

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    
app.listen(PORT, () => {
    console.log("server is listening at ", PORT);
    // Hotel.insertMany(hoteldata);
    // Category.insertMany(categories);

})
  
).catch((error) => console.error(`{error} did not connect`));







