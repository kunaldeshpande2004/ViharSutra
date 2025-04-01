import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email'); // Fix: use 'email' instead of 'name'
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.post('http://localhost:5000/trips', { email }, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);
        setTrips(response.data); // Fix: Ensure this is an array
      } catch (err) {
        console.log('Error occurred', err);
      }
    };

    if (email) fetchTrips(); // Ensure email is not null before making a request
  }, [email]);

  return (
    <div>
      <nav className='flex justify-between p-5'>
        <h1 className='text-4xl'>My Trips</h1>
        <div className='text-white bg-black rounded-3xl text-3xl p-2 cursor-pointer' onClick={() => navigate('/search')}>+</div>
      </nav>

      {trips.length > 0 ? (
        <div className="w-full mt-10 grid gap-9 justify-center p-6">
          {trips.map((trip, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg w-[100%] text-center flex flex-col gap-5">
              <h2 className="text-2xl font-bold">{trip.destination}</h2>
              <p><strong>Budget:</strong> {trip.buget}</p>
              <p><strong>Members:</strong> {trip.members}</p>
              <p><strong>Start Date:</strong> {new Date(trip.startDate).toDateString()}</p>
              <p><strong>End Date:</strong> {new Date(trip.endDate).toDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full grid gap-9 justify-center p-6">
          <div className="text-4xl w-full grid justify-center">&#x1F4CD;</div>
          <h1 className="w-full grid justify-center text-4xl">No Trips Planned Yet</h1>
          <h3 className="text-2xl w-full grid justify-center">Looks like you haven't planned a trip yet. Start a new trip now!</h3>
          <button onClick={() => navigate('/search')} className="text-white bg-black rounded-3xl p-4 cursor-pointer">
            Start a New Trip
          </button>
        </div>
      )}
    </div>
  );
}
