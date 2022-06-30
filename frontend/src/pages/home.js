import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
//import './home.css'

const Home = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [add, setAdd] = useState('')


    let navigate = useNavigate();

    const createUser= async ()=>{
    const user={
            firstName:fname,
            lastName:lname,
            phone:phone,
            email:email,
            password:pass,
            address:add,
        }
       

const userRequest=await axios.post("http://localhost:3002",user)
console.log(userRequest)

navigate('/login')
    }



  return (
    <>
     <div className='outer'>
        <div className='inner'>
            <div className='details'>
                <form >
                    <h2 className='title'>AADHAR ENROLLMENT APP</h2>
                    <div className='form-group'>

                    <label htmlFor="text">Enter Your First Name</label>
                <input className='fname' type="text" placeholder='First name ' onChange={(e)=>{setFname(e.target.value)}}/>
                    </div>
                <div className='form-group'>
                        
                <label htmlFor="text">Enter Your Last Name</label>
                <input className='lname' type="text" placeholder=' Last name ' onChange={(e)=>{setLname(e.target.value)}}/>
                    </div>
                <div className='form-group'>
                        
                <label htmlFor="phone">Enter Your Phone Number</label>
                <input className='phone' type="phone" placeholder=' Phone Number 'onChange={(e)=>{setPhone(e.target.value)}}/>
                    </div>
                <div className='form-group'>
                       
                <label htmlFor="email">Enter Your Email Address</label>
                <input className='email' type="email" placeholder=' Email ' onChange={(e)=>{setEmail(e.target.value)}}/> 
                    </div>
                <div className='form-group'>
                        
                <label htmlFor="password">Enter Your Password</label>
                <input className='password' type="password" placeholder=' Password ' onChange={(e)=>{setPass(e.target.value)}}/>
                    </div>
                <div className='form-group'>
                     
                <label htmlFor="text">Enter Your Residential Address</label>
                <input className='address' type="text" placeholder=' Address ' onChange={(e)=>{setAdd(e.target.value)}}/>   
                    </div>

                <button className='register' type="button" onClick={createUser}>REGISTER</button>
                
                <footer>
                <p>Already Have an Account? <a href="http://localhost:3000/login" >Login Here</a></p>
                </footer>

                </form>
                
            </div>
        </div>
    
    </div>
    </>
   
  )
}

export default Home