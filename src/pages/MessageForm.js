import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";


function MessageForm() {
    const nav = useNavigate()
      const {id} = useParams()
      const [user , setuser] = useState({})
      useEffect(() => {
         getuser()
      }, [])
      
      const getuser = () =>{
          axiosInstance.get('/others_profile/' + id ).then(
              res => {
                  setuser(res.data)
              }
          )
      }
      const send = (e) =>{
        e.preventDefault();
        if (e.target.content.value === ""){
                toast.error('message is empty !')
        } 
        else {
            axiosInstance.post('message/' + id,{'content' : e.target.content.value}).then(
               res => {toast.success(`message sent succefully !`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                    nav('/')
                }
            )
        }
      }
  return (
      <>
    <div className='container mt-2 border border-light'>
    <h1>MessageForm </h1>
  
    
    <div class="mb-3">
    <form method='POST' onSubmit={(e) => send(e)}>
    <h4> to : {user.username}</h4>
   <label for="exampleFormControlTextarea1" class="form-label">Message Content</label>
    <textarea class="form-control" name='content' rows="3"></textarea>
    <button className='btn btn-primary mt-2' type='submit'> Send </button>
    </form>
    </div>
    </div>
</>
  )
}

export default MessageForm