export const getRegisterAuth = async (req, res) => {
    try {
        
    } catch (error) {
        res
            .status(404)
            .json({ message: error.message });
    }
}