import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Books.css";

function Books() {
  const [books, setbooks] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axiosInstance.get("books").then((res) => {
      setbooks(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axiosInstance.get("categories").then((res) => {
      setCategory(res.data);
      // console.log(res.data)
    });
  }, []);

  return (
    <>
      {category.map((cat) => {
        return (
          <div className="container ">
            <h2 style={{ color: "#2c9db7", marginTop: "2%" }}>{cat.name}</h2>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                <div className="row">
                    {books.map((book, index) => {
                      return (
                        <>
                                {cat.id === book.cat.id && (
                                  <div className="card col-3 offset-1"
                                  style={{ width: "18 rem" }}>
                                    <img
                                      src={"http://127.0.0.1:8000" + book.image}
                                      class="card-img-top "
                                      alt="..."
                                    />
                                    <div class="card-body">
                                      <Link to={`/book/${book.id}`}>
                                        <h3 class="card-title">{book.title}</h3>
                                      </Link>
                                      <Link to={`/profile/${book.user.id}`}>
                                        <h5
                                          class="card-title"
                                          style={{ color: "#2c9db7" }}
                                        >
                                          <b>Owner: </b>
                                          {book.user.username}
                                        </h5>
                                      </Link>
                                      <p class="card-title">
                                        <b>Status: </b>
                                        {book.status}
                                      </p>
                                      <small class="card-text">
                                        <b>Author:</b>
                                        {book.author}
                                      </small>
                                    </div>
                                  </div>
                                )}

                        </>
                      );
                    })}
                  </div>
                  </div>
                  </div>
      
              
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Books;
