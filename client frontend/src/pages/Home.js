import React from 'react'
import Nav from "../components/Nav"
import '../index.css';
import AuthModal from '../components/AuthModal';
import { useState,useEffect } from 'react';
import {useCookies} from 'react-cookie'
const Home = () => {
   const [showModal,setShowModal]= useState(false)
   
   const [isSignUp,setIsSignUp]=useState(true)
   
   const [cookies,setCookie,removeCookie]=useCookies(['user'])

   const authToken =cookies.AuthToken;//if this true or not this decide ..
   
   const handleClick=()=>{
      if(authToken){
            removeCookie('UserId',cookies.UserId)
            removeCookie('AuthToken',cookies.AuthToken)
            window.location.reload()
        }
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  

   }


   return (
    <div className='overlay'>
    <Nav 
   
     minimal={false} 
     authToken={authToken} 
     setShowModal={setShowModal} 
     showModal={showModal} 
     setIsSignUp={setIsSignUp}
     />
    <div className='home'>
       <h1 className='primary-title'>Swipe Right®</h1>
      <button className='primary-button' onClick={handleClick}>
                {authToken ? 'Signout': 'Create Account' }

      </button>
{/* this below line means if showModal true then run command after&& i.e render authmoad comp*/}
      {showModal && (
      <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
      )}
      
      </div>
      </div>
  )
}

export default Home