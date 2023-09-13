import jwt from 'jsonwebtoken';

 const verifyUser = (req, res, next) => { 
    const token = req.header.authorization;
    if (token) {
        jwt.verify(token,process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(403).json({message: "Invalid token"});
            } else {
                req.decodedToken = decodedToken;
                next()
            }
        })
    }



}

export default verifyUser;