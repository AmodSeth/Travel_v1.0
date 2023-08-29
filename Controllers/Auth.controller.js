import User from "../Models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

/* //
    new thing about spread operator is that if we write {password, ...others} it will return all the properties of the object except password
    else all of it will e returned
    // if we wanna add anything in that object we can do it like this
    {password, ...others, newProperty: "new value"}
    //its best for adding jwt token in the object

- we can also add a expire in
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"}) 
*/


export const getRegisterAuth = async (req, res) => {
    try {
        //get the user object
        const userObject = {
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
        }
        //wait for new user req to be made
   
        const newUser = new User(userObject);

        const savedUser = await newUser.save();
        //201 means successfully new user is added
        res.status(201).json(savedUser);
        
    } catch (error) {
        res
                //500 is missign error
            .status(500)
            .json({ message: error.message });
    }
}
export const getLoginAuth = async (req, res) => { 
    try {
        //auth by number
        const userObj = await User.findOne({ number: req.body.number })
        if (!userObj) {
            res.status(404).json({ message: "User not found" })
        }
                else {
            //check password
            const passwordMatch = bcrypt.compareSync(req.body.password, userObj.password)
            if (passwordMatch) {
                 //add the jwt token here
                // const token = jwt.sign({id: user._id}, process.env.JWT_SECRET
                const { password, ...others } = userObj._doc;

                
                var token  = jwt.sign({ username: userObj.username}, process.env.JWT_SECRET)
                
               
                const final_user = {...others,token}
                res.status(200).json({
                    final_user,
                    message: "Login successful"
                })
            }
            else {
                res.status(401).json({ message: "Password does not match" })
            }
        }

    } catch (error) {
        res.status(500).json({ message: error.message })

    }


}

// // Load hash from your password DB.
// bcrypt.compareSync(myPlaintextPassword, hash); // true
// bcrypt.compareSync(someOtherPlaintextPassword, hash); // false