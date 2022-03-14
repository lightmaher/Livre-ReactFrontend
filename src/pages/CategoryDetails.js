import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function CategoryDetails() {
  const params = useParams();
  const [books, setbooks] = useState([]);
  const [cat, setcat] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/category/${params.id}`)
      .then((res) =>{ 
        setbooks(res.data.books);
        setcat(res.data.cat)
      })
        
  }, [] );
  return (
    <>
     <div className="container mt-5">
       <h1> {cat.name} </h1>
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
