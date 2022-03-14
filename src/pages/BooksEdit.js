import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Books.css";


function BooksEdit() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    axiosInstance.get("books").then((res) => {
      setbooks(res.data);
      
    });
  }, []);

  return (
    <>
     <div className="container mt-5">
       <div className="row">
         {
           books.map( book=>{
             return (
               <div class="card mb-3 col-3 ms-4">
                <div class="row g-0">
                  <div class="col-md-4">
                  <img src={"http://127.0.0.1:8000" + book.image} height={100} class="img-fluid rounded-start mt-2" alt="..." /> 
                  </div>
                  <div class="col-md-8">
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
  );
}
export default BooksEdit;
