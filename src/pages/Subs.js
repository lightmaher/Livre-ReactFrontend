import React from 'react'
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Subs() {
    const [subbooks, setsubbooks] = useState([]);
    const [books, setbooks] = useState([]);

  useEffect(() => {
    axiosInstance.get('subsbooks').then(res => {
      setsubbooks(res.data)
      console.log(res.data)
    })
  }, [])
  
  return (
      <>
    <h1> My subs </h1>
    <div className="container mt-5">
       <div className="row">
         { 
           subbooks.map( book=>{
             return (
               <div class="card mb-3 col-3 ms-4">
                <div class="row g-0">
                  <div class="col-md-4">
                  <img src={"http://127.0.0.1:8000" + book.image} height={100} class="img-fluid rounded-start mt-2" alt="..." /> 
                  </div>
                  <div class="col-md-8">
                  <div class="card-header">
                    {book.cat.name}
                  </div>
                    <div class="card-body">
                   <Link to={`/book/${book.id}`}  className="text-primary"> <h5 class="card-title">{book.title}</h5> </Link>   
                    <Link className="text-info" to={`/profile/${book.user.id}`} > <p class="card-text"><b>Owner:</b> {book.user.username}</p> </Link>  
                      <span className="card-text"> <b>Status: </b>{book.status}</span>
                      <span class="card-text"> <small class="text-muted"><b>Author:</b> {book.author} </small> 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             )
           })
         }
         </div>
         </div>
         </>
         
  )
}

export default 
Subs