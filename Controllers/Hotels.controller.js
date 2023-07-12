import Hotel from "../Models/Hotel.model.js";



export const getHotelData = async (req, res) => {
    try {
        res
            .status(200)
            .send("this is the endpoint from the hotel controller")
    } catch (error) {
        res
            .status(404)
            .json({ message: error.message });
    }
}

export const getHotelCategory = async (req, res) => {
    const HotelCategory = req.query.category;
    try {
        let hotelsQuery;
        if (HotelCategory) {
            hotelsQuery = await Hotel.find({ category: HotelCategory }); 


        }
        else {
            hotelsQuery = await Hotel.find({});
        }
        hotelsQuery ? res.json(hotelsQuery) : res.status(404).json({ message: "no data found" });
    } catch (error) {
        res
            .status(404)
            .json({ message: error.message });
    }
}