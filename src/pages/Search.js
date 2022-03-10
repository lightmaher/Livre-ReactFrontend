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

      {searchResulte.map((book) => {
      return (
    <div className="col-md-6">
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
            class="img-fluid rounded-start"
            alt="picture"/>
        
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <Link to={`/book/${book.id}`}>
            <p class="card-title">{book.title}</p>
            </Link>
        <p class="card-text">
        <small class="text-muted">
            Author: {book.author}
        </small>
        </p>
        <p className="card-text">
        Status: {book.status}
        </p>
                  
        </div>
        </div>
    </div>
    </div>
</div>
);
})}  
    </div>
  );
}

export default Search;
