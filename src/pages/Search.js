import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'
function Search(props) {
  const [searchResulte, setSearchResulte] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
    .get(`http://127.0.0.1:8000/api/search?search=${params.resulte}`)
    .then((res) => {
      setSearchResulte(res.data);
    });
      
  }, [])

  console.log(searchResulte);
  return (
    <div>
      {/* <h1>welcome to search</h1> */}
      <div className="container mt-5">
       <div className="row">
      {searchResulte.map((book) => {
      return (


        <div class="card mb-3 col-3 ms-4">
        <div class="row g-0">
          <div class="col-md-4">
          <img src={book.image} height={100} class="img-fluid rounded-start mt-2" alt="..." /> 
          </div>
          <div class="col-md-8">
            <div class="card-body">
           <Link to={`/book/${book.id}`}  className="text-primary"> <h5 class="card-title">{book.title}</h5> </Link>   
            <Link className="text-info" to={`/profile/${book.user.id}`} > <p class="card-text">{book.user.username}</p> </Link>  
              <p className="card-text"> Status: {book.status}</p>
              <p class="card-text"> <small class="text-muted"> {book.author} </small> 
              </p>
            </div>
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
