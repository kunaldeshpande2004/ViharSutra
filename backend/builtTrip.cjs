const axios = require('axios');
require('dotenv').config();

const builtTrip = async (req, res) => {
  const { place, budget, members, sDate, eDate } = req.body;

  const API_KEY = process.env.OPENROUTER_API_KEY; // not OpenAI API key now!

  const userPrompt = `
City: ${place}
Budget: ${budget}
Members: ${members}
Start Date: ${sDate}
End Date: ${eDate}

Task: 
Generate a complete travel plan including:
- How to reach the city (flight, train, bus) with real links and approximate cost.
- Detailed day-wise itinerary (morning, afternoon, evening plans).
- Mention tourist places with timings to visit and entry prices if any.
- Suggest hotels to stay at based on budget type given to you  and number of family members.
- also give proper time stemps for food breaks with recommendations to try
- Total estimated trip cost.
- Make the trip enjoyable and family-friendly.
- Write in a clear and friendly tone.
- with proper links to all the above.

Format the response nicely with headings, bullet points, and links.
  `;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',  // Notice changed URL
      {
        model: "mistralai/mistral-7b-instruct",  // ✅ This model exists on OpenRouter
        messages: [
          { role: "system", content: "You are a helpful and expert travel planner." },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 3000
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`, // OpenRouter key
          "HTTP-Referer": "http://localhost:5173", // your frontend link or localhost
          "X-Title": "Travel Planner App" // (optional) project name
        }
      }
    );

    const tripPlan = response.data.choices[0].message.content;
    res.status(200).json({ tripPlan });
  } catch (error) {
    console.error("Error generating trip:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate trip plan. Please try again later." });
  }
};

module.exports = builtTrip;
