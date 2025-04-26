const axios = require("axios");

let amadeusToken = null;
let tokenExpiry = 0;

async function getAmadeusToken() {
    if (amadeusToken && Date.now() < tokenExpiry) {
        return amadeusToken;
    }

    try {
        const response = await axios.post(
            "https://test.api.amadeus.com/v1/security/oauth2/token",
            `grant_type=client_credentials&client_id=${process.env.AMADEUS_CLIENT_ID}&client_secret=${process.env.AMADEUS_CLIENT_SECRET}`,
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        amadeusToken = response.data.access_token;
        tokenExpiry = Date.now() + response.data.expires_in * 1000;

        return amadeusToken;
    } catch (error) {
        console.error("Error fetching Amadeus token:", error.response?.data || error.message);
        return null;
    }
}

module.exports = getAmadeusToken;
