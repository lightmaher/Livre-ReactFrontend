import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { width } from "@mui/system";

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
    <div style={{overflowY:"hidden"}}>
     <div className="container mt-5">
     <h1
      style={{
        color: "#2c9db7",
        fontSize: "300%",
        marginLeft: "11%",
        fontFamily: "DM Sans",
      }}
    >
      {cat.name}
    </h1>
    <div className="row g-5 offset-1">
         {
           books.map( book=>{
             return ( 
              <>
              <div class="col-4">
                        <div class="card h-100" style={{width:"90%"}}> 
                          <img
                            src={"http://127.0.0.1:8000" + book.image}
                            class="card-img-top"
                            style={{hieght:"60vh"}}
                            alt="..."
                          />
                          <div class="card-body">
                            <Link to={`/book/${book.id}`}>
                              <h3 class="card-title" style={{color:"#000000"}}>
                                {book.title}
                              </h3>
                            </Link>
                            <Link to={`/profile/${book.user.id}`}>
                                  <h5
                                    class="card-title"
                                    style={{ color: "#2c9db7",fontSize:"150%" }}
                                  >
                                    {/* <b>Owner: </b> */}
                                    {book.user.username}
                                  </h5>
                                </Link>
                            <p class="card-text">
                              <span className="c-t">Author: </span>{" "}
                              {book.author}
                            </p>
                            <p className="card-text">
                              <span className="c-t">Status: </span>
                              <span style={{ textTransform: "capitalize" }}>
                                {book.status}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
              </>
             )
           })
         }
         </div>
       </div>
    </div>
  );
}
