import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Buget() {

  const navigate = useNavigate()
  const plans = [
    { title: "Cheap", description: "Stay conscious of cost ", icon: " 💵" },
  { title: "Moderate", description: "Keep cost on the average side", icon: "💰" },
  { title: "Luxury", description: "Don't worry about cost", icon: "💸" },
 
  ]


  const setBuget=(e)=>{
    sessionStorage.setItem('buget',e);
    navigate('/traveldates')
  }

  return (
    <div className='p-5 place-items-center'>
      <h1 className='text-5xl '> Buget</h1>
      <br />
      <h3 className='text-4xl'> Choose spending habbits for your trip</h3>
<br />
    <div className='grid gap-5 '>
      { plans.map((plan,idx)=>(
         <div onClick={()=>setBuget(plan.title)}  key={idx} className='bg-gray-200 flex rounded-2xl w-96 cursor-pointer p-5 hover:bg-gray-300  justify-between'>
         <div>
             <h2 className='text-2xl'>{plan.title}</h2>
             <p>{plan.description}</p>
         </div>
         <div className='text-4xl'>
        {plan.icon}
         </div>
       </div>
      ))
      }
      {/* <button onClick={()=>navigate('/traveldates')} className='bg-black text-2xl p-4 rounded-2xl text-white hover:bg-[#1a1918] cursor-pointer' >Continue</button> */}
      </div>
    </div>
  )
}
