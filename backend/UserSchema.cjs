const mongoose = require('mongoose');


const TripSchema = new mongoose.Schema({
    destination : String,
    buget : String,
    members : String,
    startDate : Date,
    endDate : Date,
    plan : String,
})

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {  // Fix: lowercase 'p' for consistency
        type: String,
        required: true,
    },
    trips : [TripSchema]
}, { collection: "Users" });

module.exports = mongoose.model("User", UserSchema);
