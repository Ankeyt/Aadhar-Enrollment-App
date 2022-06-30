import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')



    let navigate = useNavigate();


    const loginUser=async()=>{
const login={
    email:email,
    password:pass,
}
const loginReq=await axios.post("http://localhost:3002/login",login)
console.log(loginReq)
const {data}=loginReq
 //console.log(data)
 console.log(loginReq.status)
 if(loginReq.status===200){
  //console.log(data.token)
  
  const userobj={
    'name':data.name,
    'email':data.email,
    "token":data.token
  }
const uid=data.aadhar
  localStorage.setItem("token",data.token)
  localStorage.setItem("user",JSON.stringify(userobj))
  window.open(`http://localhost:3000/${uid}`, "_blank")
  //navigate(`/${uid}`)
}

    }

  return (
    <>
    <div className='outer'>
        <div className='inner'>
            <div className='details'>
                <form >
                    <h2 className='title'>SIGN IN TO AADHAR ENROLLMENT APP</h2>
                    
                <div className='form-group'>
                       
                <label htmlFor="email">Enter Your Email Address</label>
                <input className='email' type="email" placeholder=' Email ' onChange={(e)=>{setEmail(e.target.value)}}/> 
                    </div>
                <div className='form-group'>
                        
                <label htmlFor="password">Enter Your Password</label>
                <input className='password' type="password" placeholder=' Password ' onChange={(e)=>{setPass(e.target.value)}}/>
                    </div>
                

                <button className='register' type='button' onClick={loginUser}>LOGIN</button>
                
                <footer>
                <p>Register an account? <a href="http://localhost:3000" >Register Here</a></p>
                </footer>

                </form>
                
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Login