import { useState } from "react";
import PLACEHOLDER_IMG from '../assets/places.jfif'
import res  from '../assets/res.jfif'
import hotel from '../assets/hotel.jfif'
import { useNavigate } from "react-router-dom";
const GEOAPIFY_API_KEY = "764a8b03d69348c28499ff89299d7253";

const App = () => {

  const navigate = useNavigate()
    const [city, setCity] = useState("");
    const [places, setPlaces] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    // Fetch Places from Backend
    const fetchPlaces = async (city) => {
      if (!city) return;
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${city}`);
      const data = await response.json();
      setPlaces(data.places);
      setLoading(false);
  };
  const setPlace=(e)=>{
      sessionStorage.setItem('place',e);
      navigate("/members")
     }

    // Fetch AutoComplete Suggestions
    const fetchSuggestions = async (query) => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${GEOAPIFY_API_KEY}`
        );
        const data = await response.json();

        setSuggestions(
            data.features.map((place) => place.properties.city || place.properties.formatted)
        );
    };
    return (
      <div className="flex flex-col items-center min-h-screen p-6">
          {/* Search Input */}
          <div className="relative w-full max-w-lg">
              <input
                  type="text"
                  className="w-full p-4  text-lg border font-bold border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => {
                      setCity(e.target.value);
                      fetchSuggestions(e.target.value);
                  }}
              />
  
              {/* Autofill Suggestions */}
              {suggestions.length > 0 && (
                  <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-50">
                      {suggestions.map((suggestion, index) => (
                          <li
                              key={index}
                              className="p-3 cursor-pointer hover:bg-gray-200 text-gray-700"
                              onClick={() => {
                                  setCity(suggestion);
                                  setSuggestions([]);
                              }}
                          >
                              {suggestion}
                          </li>
                      ))}
                  </ul>
              )}
          </div>
  
          {/* Search Button */}
          <button
              onClick={() => fetchPlaces(city)}
              className="mt-4 cursor-pointer px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
          >
              Search 🔍
          </button>
  
          {/* Loading Animation */}
          {loading && (
              <div className="mt-6 text-black text-xl font-semibold animate-bounce">
                  Fetching places...
              </div>
          )}
  
          {/* Display Places in a Single Card */}
          {places.length > 0 && (
              <div className="mt-8 w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Explore {city} ✈️
                  </h2>
  
                  {/* Tourist Attractions Section */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">🏛️ Tourist Attractions</h3>
                  <div className="overflow-x-auto cursor-pointer scrollbar-hide">
                      <div className="flex space-x-6 p-2">
                          {places
                              .filter((place) => place.category.includes("tourism.sights"))
                              .map((place, index) => (
                                  <div
                                      key={index}
                                      className="min-w-[250px] bg-gray-100 rounded-lg shadow-md p-4 transform transition hover:scale-103 hover:shadow-xl"
                                  >
                                      <img
                                          src={PLACEHOLDER_IMG}
                                          alt={place.name}
                                          className="w-full h-32 object-cover rounded-lg"
                                      />
                                      <h3 className="mt-3 text-lg font-semibold text-gray-800">{place.name}</h3>
                                      <p className="text-gray-600 text-sm">{place.address}</p>
                                      
                                      {/* Google Maps Link */}
                                      <a 
                                          href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates[1]},${place.coordinates[0]}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-blue-500 text-sm mt-1 underline"
                                      >
                                          View on Map
                                      </a>
                                  </div>
                              ))}
                      </div>
                  </div>
  
                  {/* Hotels Section */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🏨 Hotels</h3>
                  <div className="overflow-x-auto cursor-pointer scrollbar-hide">
                      <div className="flex space-x-6 p-2">
                          {places
                              .filter((place) => place.category.includes("accommodation.hotel"))
                              .map((place, index) => (
                                  <div
                                      key={index}
                                      className="min-w-[250px] bg-gray-100 rounded-lg shadow-md p-4 transform transition hover:scale-103 hover:shadow-xl"
                                  >
                                      <img
                                          src={hotel}
                                          alt={place.name}
                                          className="w-full h-32 object-cover rounded-lg"
                                      />
                                      <h3 className="mt-3 text-lg font-semibold text-gray-800">{place.name}</h3>
                                      <p className="text-gray-600 text-sm">{place.address}</p>
  
                                      {/* Google Maps Link */}
                                      <a 
                                          href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates[1]},${place.coordinates[0]}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-blue-500 text-sm mt-1 underline"
                                      >
                                          View on Map
                                      </a>
                                  </div>
                              ))}
                      </div>
                  </div>
  
                  {/* Restaurants Section */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🍽️ Restaurants</h3>
                  <div className="overflow-x-auto cursor-pointer scrollbar-hide">
                      <div className="flex space-x-6 p-2">
                          {places
                              .filter((place) => place.category.includes("catering.restaurant"))
                              .map((place, index) => (
                                  <div
                                      key={index}
                                      className="min-w-[250px] bg-gray-100 rounded-lg shadow-md p-4 transform transition hover:scale-103 hover:shadow-xl"
                                  >
                                      <img
                                          src={res}
                                          alt={place.name}
                                          className="w-full h-32 object-cover rounded-lg"
                                      />
                                      <h3 className="mt-3 text-lg font-semibold text-gray-800">{place.name}</h3>
                                      <p className="text-gray-600 text-sm">{place.address}</p>
  
                                      {/* Google Maps Link */}
                                      <a 
                                          href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates[1]},${place.coordinates[0]}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-blue-500 text-sm mt-1 underline"
                                      >
                                          View on Map
                                      </a>
                                  </div>
                              ))}
                      </div>
                  </div>
  
                  {/* Build a Trip Button */}
                  <button
                      onClick={() => setPlace(city)}
                      className="bg-black cursor-pointer p-3 mt-5 rounded-2xl text-white hover:bg-gray-900"
                  >
                      Build a Trip ✈️
                  </button>
              </div>
          )}
      </div>
  );
  
  
};

export default App;










// import React from "react";
// import { useNavigate } from "react-router-dom";
// import places from "./places";

// export default function Search() {
//   const navigate = useNavigate();
// const setPlace=(e)=>{
//   sessionStorage.setItem('place',e);
//   navigate("/members")
// }
//   return (
//     <>
//       {/* Search Bar */}
//       <div className="flex gap-2 p-10 items-center justify-center">
//         <input
//           className="p-4 w-[80%] border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
//           type="text"
//           placeholder="Enter the place you want to visit"
//         />
//         <div
       
//           className="text-3xl cursor-pointer border p-3 rounded-2xl bg-gray-200 hover:bg-gray-300 transition"
//         >
//           🔍
//         </div>
//       </div>

//       {/* Suggestions Section */}
//       <div className="p-10 w-full">
//         <h2 className="text-3xl text-center mb-8 font-bold text-gray-800">
//           Suggestions for Trips
//         </h2>

//         {/* Grid Layout for Places */}
//         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6">
//           {places.map((place, index) => (
//             <div
//             key={index}
//             className="border p-6 cursor-pointer rounded-xl shadow-xl bg-white hover:scale-105 transition-transform duration-200"
//           >
//             <h3 className="text-3xl font-bold mt-3 text-gray-800">
//               {place.city}{" "}
//               <span className="text-sm text-gray-500">({place.days})</span>
//             </h3>
          
//             {/* Horizontal scrolling list */}
//             <div className="flex gap-4 overflow-x-auto mt-4 scrollbar-hide">
//               {place.placesToVisit.map((p, i) => (
//                 <div key={i} className="min-w-[200px]">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-52 h-40 object-cover rounded-lg shadow-md"
//                   />
//                   <p className="text-sm mt-2 text-center text-gray-700 font-semibold">{p.name}</p>
//                 </div>
//               ))}
//             </div>
          
//             <button
//               onClick={() => setPlace(place.city)}
//               className="bg-black cursor-pointer p-3 mt-5 rounded-2xl text-white hover:bg-gray-900"
//             >
//               Build a Trip
//             </button>
//           </div>
          
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


