import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Books.css";
import ReactDOM from "react-dom";
// import Slider from 'react-slick'
// import pricingCards from './pages/BooksEdit';

function Books() {
  const [books, setbooks] = useState([]);
  const [category, setCategory] = useState([]);
  
  useEffect(() => { 
    
    axiosInstance.get("books").then((res) => {
      let arr = []
      for (var Book of res.data){
        arr.push(Book.cat)
      }
      
      let y = arr.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i)

      setCategory(y)
      setbooks(res.data);
      console.log(y)
    });
  }, []);

  // useEffect(() => {
  //   axiosInstance.get("categories").then((res) => {
  //     setCategory(res.data);
  //   });
  // }, []);


  return (
    <div >
      {category.map((cat) => {
        return (
          <div className="container ">
            <Link to={`/category/${cat.id}`}><h1
              style={{
                color: "#2c9db7",
                marginTop: "3%",
                marginBottom: "2%",
                marginLeft: "11%",
                fontSize: "300%",
                textTransform:"uppercase",
                fontFamily: "DM Sans",
              }}
            >
              {cat.name}
            </h1>
            </Link>
            <div className="row g-5 offset-1">
              {books.map((book, index) => {
                return (
                  <>
                    {cat.id === book.cat.id && (
                      <div class="col-4">
                        <div class="card h-100">
                          
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
                    )}
                  </>
                );
              })}
            </div>
            <hr />

          </div>
          
        );
      })}

      {/* <div class="row row-cols-1 row-cols-md-2 g-4">
                        {books.map((book) => {
                          return (
                            <div class="col">
                              <div class="card h-100">
                                <img
                                  src={"http://127.0.0.1:8000" + book.image}
                                  class="card-img-top"
                                  alt="..."
                                />
                                <div class="card-body">
                                  <Link to={`/book/${book.id}`}>
                                    <p class="card-title">
                                      <span className="c-t">Title: </span>
                                      {book.title}
                                    </p>
                                  </Link>
                                  <p class="card-text">
                                    <span className="c-t">Author: </span>{" "}
                                    {book.author}
                                  </p>
                                  <p className="card-text">
                                    <span className="c-t">Status: </span>
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {book.status}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div> */}
    </div>
  );
}
export default Books;
