import { message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function TripReview() {

  
  const navigate = useNavigate()
  const place = sessionStorage.getItem('place');
  const buget = sessionStorage.getItem('buget')
  const members = sessionStorage.getItem('members')
  const sDate = sessionStorage.getItem('sDate')
  const eDate = sessionStorage.getItem('eDate') 
  const email = sessionStorage.getItem('email')

  const generate = async () => {
    try {
        console.log("Sending data to backend:", { email, place, buget, members, sDate, eDate });

        const response = await axios.post('http://localhost:5000/setTrips', {
            email,
            place,
            buget,
            members,
            sDate,
            eDate
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        console.log("Backend response:", response.data);

        if (response.data.success) {
            message.success("Trip generated successfully");
            setTimeout(() => navigate("/Home"), 2000);
        } else {
            message.error("Failed to generate trip. Please try again.");
        }
    } catch (err) {
        console.error("Axios error:", err.response ? err.response.data : err.message);
        message.error("Error generating the trip. Please try again later.");
    }
};



  return (
    <div className='p-5 place-items-center'>
      <h1 className='text-4xl '> Review your trip </h1>
      <br />
      <h3 className='text-3xl'>Before generating your trip . please review your selection</h3>
<br />
    
      <div className='flex flex-col gap-5'>
      <div className='flex rounded-2xl w-96  p-5  justify-between'>
         <div>
             <h2 className='text-xl text-gray-400'>Destination</h2>
             <p>{place}</p>
         </div>
         <div className='text-4xl'>
         &#x1F4CD;
         </div>
       </div>
       <div className='flex rounded-2xl w-96  p-5  justify-between'>
         <div>
             <h2 className='text-xl text-gray-400'>Travel dates</h2>
             <p>{sDate} to {eDate}</p>
         </div>
         <div className='text-4xl'>
      {'📆'}
         </div>
       </div>
       <div className='flex rounded-2xl w-96  p-5  justify-between'>
         <div>
             <h2 className='text-xl text-gray-400'>Who's Travelling</h2>
             <p>{members}</p>
         </div>
         <div className='text-4xl'>
         {"✈️"}
         </div>
       </div>
       <div className='flex rounded-2xl w-96  p-5  justify-between'>
         <div>
             <h2 className='text-xl text-gray-400'>Buget</h2>
             <p>{buget}</p>
         </div>
         <div className='text-4xl'>
        {"💰"}
         </div>
       </div>
       </div>

       <div className='grid gap-5 mt-5'>
      
      <button onClick={generate} className='bg-black text-xl p-3 rounded-2xl text-white hover:bg-[#1a1918] cursor-pointer' >Build My Trip</button>
      </div>


    </div>
  )
}
