import React from 'react'
import {useNavigate} from 'react-router-dom'
import landingImage from '../assets/landingImage.jpg'
export default function LandingPage() {
    const navigate = useNavigate();
  return (
   <div className="w-full min-h-screen  flex items-center justify-center  bg-cover bg-center" style={{ backgroundImage: `url(${landingImage})` }}>
      <div className="bg-[#86b1e3] opacity-90 rounded-2xl p-6 md:p-10 lg:p-3 w-full max-w-3xl text-center" >
        <h1 className="text-black  p-6 md:p-10 text-3xl md:text-3xl font-bold rounded-md">
          Welcome to Vihar Sutra
        </h1>
       <br />
        <h3 className="mt-4 text-lg md:text-2xl text-gray-800">
          Discover your next adventure effortlessly with Vihar Sutra, an ultimate travel planner using AI technology.
        </h3>
        <br />
        <button className="w-full cursor-pointer mt-6 bg-[#74b0d6]  text-black py-3 text-lg rounded-lg hover:bg-[#8cccf5] transition" onClick={() => navigate('/Home')}>
          Get Started
        </button>
      </div>
    </div>

  )
}
