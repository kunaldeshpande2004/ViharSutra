import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CreateAccount() {
  const navigate = useNavigate()
  const [fullname , setFullName] = useState('');
  const [email , setEmail] = useState('');
  const [password,setPassword] =useState('');
  const signup = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !password) {
      message.error("Fill all the details first");
      return;
    }
    try {
    
      const response = await axios.post(
        "http://localhost:5000/signup",
        { fullname, email, password }, // Send data as an object
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const result =  response.data;
      if(result.success){
        console.log(response.data);
      message.success("Signup successful",2);
        message.success('welcome to vihar sutra',2)
        setTimeout(()=>{
          navigate('/signin')
        },1000)
      }
      else{
        message.error('signup failed:'+result.message)
      }
      
    } catch (err) {
      message.error("Signup failed: " + (err.response?.data?.message || err.message), 2);

    }
  };
  
    return (
      <div className='place-items-center'>
          <div className='p-8 lg:w-[50%] w-full'>
        <h1 className='text-4xl'>Let's Create your account</h1>
        <br />
        <h2 className='text-3xl text-gray-500' > Welcome to ViharSutra </h2>
        <br />
        <h2 className='text-3xl text-gray-500' > Your Ultimate Travel Planner </h2>
      </div>
      <form className="p-8 place-items-center lg:w-[50%] w-full grid">
  <div className="w-full">
    <label htmlFor="text" className="block text-left mb-2">Full Name</label>
    <input type="text" onChange={e=>setFullName(e.target.value)} placeholder="Enter Full name" className="p-5 border w-full rounded-2xl"/>
  </div>

  <div className="w-full mt-4">
    <label htmlFor="Email" className="block text-left mb-2">Email</label>
    <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" className="p-5 border w-full rounded-2xl"/>
  </div>

  <div className="w-full mt-4">
    <label htmlFor="Password" className="block text-left mb-2">Password</label>
    <input type="text" onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" className="p-5 border w-full rounded-2xl"/>
  </div>

  <button  className="bg-black text-white hover:bg-gray-950 w-[70%] cursor-pointer rounded-2xl p-5 mt-8" onClick={signup}>
    Create Account
  </button>

  <button
    className="rounded-2xl p-5 cursor-pointer hover:bg-gray-100 w-[70%] mt-3 border"
    onClick={() => navigate('/signin')}
  >
    Sign In
  </button>
</form>

      </div>
    )
}
