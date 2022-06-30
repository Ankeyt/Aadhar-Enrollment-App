import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Aadhar = () => {
const [name, setname] = useState('')
const [phone, setphone] = useState('')
const [address, setaddress] = useState('')



    const { uid} = useParams();


   async function getAadhar(){
const aadhar=await axios.get(`http://localhost:3002/${uid}`)
console.log(aadhar.data.name)
setname(aadhar.data.name)
setaddress(aadhar.data.address)

setphone(aadhar.data.phone)

    }

    // useEffect(() => {
    //  getAadhar()
    
    // }, [])
    getAadhar()

  return (
    <>
    <div className='outer'>
        <div className='inner'>
            <div className='details'>
                <form >
                    <h2 className='title'>Your Aadhar Card</h2>
                    
                <div className='form-group'>
                       
                <label htmlFor="email">Name:{" "}{name}</label>
               </div>
                <div className='form-group'>
                        
                <label htmlFor="phone">Phone:{" "}{phone}</label>
                 </div>
                <div className='form-group'>
                        
                <label htmlFor="Address">Address:{" "}{address}</label>
                 </div>
                <div className='form-group'>
                        
                <label htmlFor="number">Aadhar Number:{" "}{uid}</label>
                 </div>
                

                
                

                </form>
                
            </div>
        </div>
    
    </div>
    </>

  )
}

export default Aadhar