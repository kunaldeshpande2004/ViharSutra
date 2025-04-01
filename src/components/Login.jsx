import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [email , setEmail] = useState('');
    const [password,setPassword] =useState('')
    const [eye,setEye] = useState(false)
    const signin= async(e)=>{
      e.preventDefault()
      if(!email || !password){
        message.error('enter your mail and password first')
        return ;
      }
   
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password }, {
          headers: { 'Content-Type': 'application/json' }
        });
      
        const result = response.data;
        
        if (result.success) {
          console.log(result);
          message.success("Signup successful", 2);
          sessionStorage.setItem('fullname', result.fullname);
          sessionStorage.setItem('email',result.email)
          setTimeout(() => {
            navigate('/Home');
          }, 1000);
        } else {
          message.error(result.message || "Login failed.", 2);
        }
      } catch (err) {
        if (err.response && err.response.status === 400) {
          // This handles the Joi validation error message
          message.error(err.response.data.message || "Validation failed", 2);
        } else {
          message.error('Failed to login: ' + err.message, 2);
        }
      }
    }
  return (
    <div className='place-items-center'>
    <div className='p-8 lg:w-[50%] w-full'>
  <h1 className='text-4xl'>Let's Sign You In</h1>
  <br />
  <h2 className='text-3xl text-gray-500' > Welcome Back </h2>
  <br />
  <h2 className='text-3xl text-gray-500' > You've been missed! </h2>
</div>
      <form className="p-8 place-items-center lg:w-[50%] w-full grid">
  <div className="w-full">
    <label htmlFor="Email" className="block text-left mb-2">Email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" className="p-5 border w-full rounded-2xl"/>
  </div>

  <div className="w-full mt-4">
    <label htmlFor="Password" className="block text-left mb-2">Password</label>
    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" className="p-5 border w-full rounded-2xl"/>
  </div>

  <button onClick={signin} className="bg-black text-white hover:bg-gray-950 w-[70%] cursor-pointer rounded-2xl p-5 mt-8">
   Sign In
  </button>

  <button
    className="rounded-2xl p-5 cursor-pointer hover:bg-gray-100 w-[70%] mt-3 border"
    onClick={() => navigate('/createAccount')}
  >
    Create Account
  </button>
</form>
    </div>
  )
}
