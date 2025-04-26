const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000;
const User= require('./UserSchema.cjs')
require('./mongoDB.cjs')
const axios = require("axios");
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json()); 
const getAmadeusToken = require('./getAmadeusToken.cjs')
const builtTrip = require('./builtTrip.cjs')

const {
    signup,
    login
  
} = require('./controller/Authcontroller.cjs')

const {
    signupvalidation,
    loginValidation
} = require('./middlewares/AuthValidation.cjs')

const {
    Find ,
    Set
}= require('./middlewares/Trips.cjs')


server.post('/signup',signupvalidation,signup)
server.post('/login',loginValidation,login)
server.post('/trips',Find)
server.post('/setTrips',Set)
server.post('/builtTrip',builtTrip)

const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;
const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;

server.get("/places/:city", async (req, res) => {
    const city = req.params.city;

    try {
        console.log("Fetching data for:", city);

        // Step 1: Get city coordinates from OpenCage
        const geoResponse = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPENCAGE_API_KEY}`
        );

        if (geoResponse.data.results.length === 0) {
            return res.status(404).json({ error: "City not found" });
        }

        console.log(geoResponse.data)

        const { lat, lng } = geoResponse.data.results[0].geometry;

        // Step 2: Fetch places to visit using Geoapify
        const geoapifyResponse = await axios.get(
            `https://api.geoapify.com/v2/places?categories=tourism.sights,accommodation.hotel,catering.restaurant&filter=circle:${lng},${lat},10000&limit=20&apiKey=${GEOAPIFY_API_KEY}`
        );
        

        res.json({
            city,
            coordinates: { lat, lng },
            places: geoapifyResponse.data.features.map(place => ({
                name: place.properties.name,
                category: place.properties.categories,
                address: place.properties.address_line1,
                coordinates: place.geometry.coordinates
            }))
        });
    } catch (error) {
        console.error("Failed to fetch places:", error.response?.data || error.message);
        res.status(500).json({ error: "Error fetching data" });
    }
});



server.listen(port,()=>{
    console.log('running at port ', port)
});
