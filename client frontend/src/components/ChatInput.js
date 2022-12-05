import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
const ChatInput = ({user,clickedUser,getUsersMessages,getClickedUsersMessages}) => {
    const [textArea,setTextArea]=useState("");
    
    const userId =user?.user_id
    const clickedUserId =clickedUser?.user_id

   const addMessage=async()=>{
       const message={
           timestamp: new Date().toISOString() ,
           from_userId:userId,
           to_userId:clickedUserId,
           message: textArea
       }

       try{
           await axios.post('https://backendatingapp-production.up.railway.app/message',{message})
           getUsersMessages()
           getClickedUsersMessages()
           setTextArea("")
       }
       catch(error){
        console.log(error)
       }
   }
     
    
  
  
    return (
    <div className='chat-input'>
        <textarea value={textArea} onChange={(e)=> setTextArea(e.target.value)} />
        <button className='secondary-button' onClick={addMessage} >Submit</button>
        
    </div>
  )
}

export default ChatInput