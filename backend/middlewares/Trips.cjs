const User = require('../UserSchema.cjs')
const Find = async (req,res)=>{
    const {email} = req.body;
    try{
        const user = await User.findOne({email})
        if (!user || user.trips.length === 0) {
            return res.json([]); 
        }
        return res.json(user.trips);
        
    }
    catch(err){
        return res.status(400).json({message:'Some server problem',sucess:false})
    }
}

const Set = async (req, res) => {
    const { email, place, buget, members, sDate, eDate } = req.body;
    console.log("Received data:", req.body);  // Debugging line

    try {
        const newTrip = {
            destination: place,  // Fix: Use "destination" instead of "place"
            buget,
            members,
            startDate: new Date(sDate),   // Convert to Date object
            endDate: new Date(eDate)      // Convert to Date object
        };

        const result = await User.findOneAndUpdate(
            { email: email },
            { $push: { trips: newTrip } },
            { new: true }
        );

        console.log("DB update result:", result); // Debugging line

        if (!result) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        return res.json({ message: "Trip added successfully", success: true });

    } catch (err) {
        console.error("Backend error:", err); // Debugging line
        res.status(500).json({ error: "Internal Server Error", success: false });
    }
};


module.exports ={
    Find,
    Set
}