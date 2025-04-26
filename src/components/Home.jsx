import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email');
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Fetch trips
  useEffect(() => {
    const fetchTripsAndPlans = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/trips`, { email }, {
          headers: { 'Content-Type': 'application/json' }
        });
        const tripsData = response.data.reverse(); // latest trip first
        setTrips(tripsData);
      } catch (err) {
        console.log('Error occurred', err);
      } finally {
        setLoading(false);
      }
    };

    if (email) fetchTripsAndPlans();
  }, [email]);

  // Logout function
  const logout = () => {
    sessionStorage.removeItem('fullname');
    sessionStorage.removeItem('email');
    message.success('Logging out...');
    setTimeout(() => {
      navigate('/signin');
    }, 2000);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">My Trips</h1>
        <div className="flex gap-4">
          <button
            className="text-white bg-black rounded-3xl text-3xl p-2 w-12 h-12 flex items-center justify-center cursor-pointer"
            onClick={() => navigate('/search')}
          >
            +
          </button>
          <button
            className="text-white bg-red-600 rounded-2xl px-4 py-2 text-lg font-semibold"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center text-xl font-semibold">Loading Trips...</div>
      ) : trips.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-600">No trips found. Create a new one!</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-indigo-700">{trip.destination}</h2>
                <p><strong>Budget:</strong> {trip.budget}</p> {/* Corrected budget spelling */}
                <p><strong>Members:</strong> {trip.members}</p>
                <p><strong>Start Date:</strong> {new Date(trip.startDate).toDateString()}</p>
                <p><strong>End Date:</strong> {new Date(trip.endDate).toDateString()}</p>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Generated Travel Plan:</h3>
                
                {/* Preview Box */}
                <div
                  className="bg-gray-100 p-4 rounded-xl text-sm overflow-y-auto max-h-[200px] whitespace-pre-wrap cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setSelectedTrip(trip)}
                >
                  {trip.plan.slice(0, 100)}...
                  {trip.plan.length > 100 && (
                    <div className="text-center mt-3">
                      <button className="text-white bg-black px-4 py-2 rounded-xl">
                        Click to View Full Plan
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-4xl p-8 rounded-2xl shadow-2xl relative">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">{selectedTrip.destination}</h2>
            <div className="text-gray-700 whitespace-pre-wrap overflow-y-auto max-h-[60vh]">
              {selectedTrip.plan}
            </div>
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
