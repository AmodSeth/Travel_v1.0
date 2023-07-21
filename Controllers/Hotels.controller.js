import Hotel from "../Models/Hotel.model.js";



export const getSingleHotel = async (req, res) => {
    const Hoteldata_id = req.params.id; 
    try {
        const HotelData = await Hotel.findById(Hoteldata_id);
        res.json(HotelData);
            
            
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
            //if not found send all the data
            hotelsQuery = await Hotel.find({});
        }
        hotelsQuery ? res.json(hotelsQuery) : res.status(404).json({ message: "no data found" });
    } catch (error) {
        res
            .status(404)
            .json({ message: error.message });
    }
}