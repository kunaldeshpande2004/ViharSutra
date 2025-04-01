import React from "react";
import { useNavigate } from "react-router-dom";
import places from "./places";

export default function Search() {
  const navigate = useNavigate();
const setPlace=(e)=>{
  sessionStorage.setItem('place',e);
  navigate("/members")
}
  return (
    <>
      {/* Search Bar */}
      <div className="flex gap-2 p-10 items-center justify-center">
        <input
          className="p-4 w-[80%] border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter the place you want to visit"
        />
        <div
       
          className="text-3xl cursor-pointer border p-3 rounded-2xl bg-gray-200 hover:bg-gray-300 transition"
        >
          🔍
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="p-10 w-full">
        <h2 className="text-3xl text-center mb-8 font-bold text-gray-800">
          Suggestions for Trips
        </h2>

        {/* Grid Layout for Places */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-6">
          {places.map((place, index) => (
            <div
            key={index}
            className="border p-6 cursor-pointer rounded-xl shadow-xl bg-white hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-3xl font-bold mt-3 text-gray-800">
              {place.city}{" "}
              <span className="text-sm text-gray-500">({place.days})</span>
            </h3>
          
            {/* Horizontal scrolling list */}
            <div className="flex gap-4 overflow-x-auto mt-4 scrollbar-hide">
              {place.placesToVisit.map((p, i) => (
                <div key={i} className="min-w-[200px]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-52 h-40 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm mt-2 text-center text-gray-700 font-semibold">{p.name}</p>
                </div>
              ))}
            </div>
          
            <button
              onClick={() => setPlace(place.city)}
              className="bg-black cursor-pointer p-3 mt-5 rounded-2xl text-white hover:bg-gray-900"
            >
              Build a Trip
            </button>
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
}



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Autocomplete, useLoadScript } from "@react-google-maps/api";

// const libraries = ["places"];

// export default function Search() {
//   const navigate = useNavigate();
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // 🔹 Replace with your API Key
//     libraries,
//   });

//   const [autocomplete, setAutocomplete] = useState(null);
//   const [place, setPlace] = useState("");

//   const handlePlaceSelect = () => {
//     if (autocomplete) {
//       const placeData = autocomplete.getPlace();
//       setPlace(placeData?.formatted_address || placeData?.name || "");
//     }
//   };

//   return (
//     <>
//       <div className="flex gap-1 p-10">
//         {isLoaded ? (
//           <Autocomplete
//             onLoad={(auto) => setAutocomplete(auto)}
//             onPlaceChanged={handlePlaceSelect}
//           >
//             <input
//               className="p-4 w-full border rounded-2xl"
//               type="text"
//               placeholder="Enter the place you want to visit"
//               value={place}
//               onChange={(e) => setPlace(e.target.value)}
//             />
//           </Autocomplete>
//         ) : (
//           <input
//             className="p-4 w-full border rounded-2xl"
//             type="text"
//             placeholder="Loading..."
//             disabled
//           />
//         )}
//         <div
//           onClick={() => navigate("/members")}
//           className="text-3xl cursor-pointer border transition p-2 rounded-2xl"
//         >
//           &#x1F50D;
//         </div>
//       </div>

//       <div className="w-[100%]">
//         <h2 className="text-3xl text-center">Suggestions for trip</h2>
//       </div>
//     </>
//   );
// }

