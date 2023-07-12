import express from "express";
import hotelRoutes from "./routes/hotels.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import Hotel from "./Models/Hotel.model.js";
import { hoteldata } from "./DATA/hotelData.js";



const app = express();

dotenv.config();

app.use(express.json());


//routes handlers
app.use("/apiv1/hotel", hotelRoutes);



const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    
app.listen(PORT, () => {
    console.log("server is listening at ", PORT);
    // Hotel.insertMany(hoteldata);

})
  
).catch((error) => console.error(`{error} did not connect`));







