
const User = require('../UserSchema.cjs')
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    console.log("Signup Request Received");
    try {
        const { fullname, email, password } = req.body;

        console.log("Received Data:", { fullname, email, password });

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists, please login", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password Hashed Successfully");

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("User Saved Successfully");

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (err) {
        console.error("Signup Error:", err);  // LOGGING ERROR HERE
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message,  // Include error message
        });
    }
};

const login = async (req,res) =>{
    try{
        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({email : email});

        if(!user){
            return res.status(400)
            .json({message:'user not found',sucess:false})
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return res.status(400)
            .json({message:'invalid / wrong password',sucess:false})
        }

        res.status(201).json({
            message:'login sucessfull',
            success:true,
            fullname:user.fullname,
            email:user.email
        })
    }
    catch(err){
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
          });
    }
}
module.exports = {
    signup,
    login,
  };
  