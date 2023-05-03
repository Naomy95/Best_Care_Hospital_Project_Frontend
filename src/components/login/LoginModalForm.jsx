import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../lib/api/login'
import logo from "../../assets/images/logo1.png";



const LoginModalForm = () => {
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const navigate= useNavigate()
    
    const setValue = () => {
		const input ={email:email,name:username}
        login(input).then((res)=>{
          
      console.log(res.data);
      localStorage.setItem('access_token',res.data.token)
      localStorage.setItem('username',username)
      navigate("/")
    })
       
	}
    
   
  
  return (

<label  className="modal border-4 border-blue cursor-pointer ">
<div className="modal-box p-0   flex ">
     <div className='bg-buttoncolor py-10 w-2/3'>
     <div>
   <h3 className="font-medium text-2xl text-center text-white font-sans">Login</h3>
   <div className='px-4'>
    <div className="form-control w-full ">
  
   <input type="email" placeholder="Your email"  value={email} onChange={(e)=>setEmail(e.target.value)}    className="mt-14 bg-gray-50 border-[2px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
   
   <input type="text" placeholder="User name"  value={username} onChange={(e)=>setUsername(e.target.value)}    className="mt-6 bg-gray-50 border-[2px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
 </div>
    </div>
     <div className=" flex justify-center py-10 rounded-lg">
      <label
      onClick={setValue}
      className="btn bg-buttoncolor text-white "
    >
     Sumbit
    </label>
     </div>
   </div>
     </div>

     <div className='grid  place-items-center  w-1/3'>
<img src={logo} style={{width:'150px', height:'60px'}} alt="" />

     </div>
    
  

   </div>

</label>


  
  )
}

export default LoginModalForm