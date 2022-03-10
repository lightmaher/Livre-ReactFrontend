import React from 'react'
import  { useState } from "react";
import { useEffect , useRef  } from "react";
import { Link } from "react-router-dom";
import  {axiosInstance}  from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
function Messages() {
const [Messages,setMessages] = useState([]);
useEffect(() => {
getmessages()
}, [])
const getmessages = () => {
 axiosInstance.get('messages').then((res)=> {
     setMessages(res.data)
 })
}

const deletemessage = (e , id) => {
    e.preventDefault();
    axiosInstance.post('delmessage/' + id).then((res)=> {
        if (res.status === 200){
           getmessages()
        }
    })
}

  return (
      <>
    <h1 className='text-light mt-2'>Messages</h1>
    <div className='container mt-3'>
        <div className='row'>
    {
        Messages.map(message => {
            return(<div class="card text-dark bg-light mb-3 col-3 ms-2" >
            <div class="card-header">Message</div>
            <div class="card-body">
              <h5 class="card-title">From : {message.m_sender.username}</h5>
              <p class="card-text">{message.content}</p>
            </div>
           <div class="d-grid gap-2 d-md-flex justify-content-md-end m-2">
            <Link to={`/message/${message.m_sender.id}`} class="btn btn-primary me-md-2" type="button">Replay</Link>
            <button class="btn btn-danger" onClick={(e)=> deletemessage(e,message.id) } type="button">Delete</button>
           </div>
          </div>)
        })
    }
     </div>
     </div>
      </>
  )
}

export default Messages