import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Members() {
  const navigate = useNavigate()
  const plans = [
    { title: "Just Me", description: "A solo traveler in exploration", icon: "✈️" },
  { title: "A Couple", description: "Two travelers in tandem", icon: "👫" },
  { title: "Family", description: "A group of fun-loving adventurers", icon: "🏠" },
  { title: "Friends", description: "A bunch of thrill-seekers", icon: "🍾" }
  ]

  const setMembers=(e)=>{
    sessionStorage.setItem('members',e);
    navigate('/buget');
  }
  return (
    <div className='p-5 place-items-center'>
      <h1 className='text-4xl b-2'> Who's Traveling</h1>
      <br />
      <h3 className='text-3xl'> Choose your traveles</h3>
<br />
    <div className='grid gap-5 '>
      { plans.map((plan,idx)=>(
         <div onClick={()=>setMembers(plan.title)} key={idx} className='bg-gray-200 flex rounded-2xl w-96 cursor-pointer p-5 hover:bg-gray-300  justify-between'>
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
      {/* <button onClick={()=>navigate('/buget')} className='bg-black text-2xl p-4 rounded-2xl text-white hover:bg-[#1a1918] cursor-pointer' >Continue</button> */}
      </div>
    </div>
  )
}
