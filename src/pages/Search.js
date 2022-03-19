import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { axiosInstance } from "../utils/axiosInstance";

function Search(props) {
  const [searchResulte, setSearchResulte] = useState([]);
  const params = useParams();
  
  
  useEffect(() => {
    
    axios
    .get(`http://127.0.0.1:8000/api/search?search=${params.resulte}`)
    .then((res) => {
     
      setSearchResulte(res.data);
    });
     
  }, [searchResulte])
  

  console.log(searchResulte);
  return (
    <div>
      <div className="container mt-5 mb-5">
       <div className="row g-5 offset-1">
      {searchResulte.map((book) => {
      return (
<div class="col-4">
      <div class="card book-card h-100">   
        <img
          src={ book.image}
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

);
})}  
 </div>
 </div>
  </div>
  );
}

export default Search;
