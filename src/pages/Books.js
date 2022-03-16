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

  ////////////////////////////////////////////////////////

  // const Card = (props) => (
  //   <div className="card">
  //     <img src={props.imgUrl} alt={props.alt || "Image"} />
  //     <div className="card-content">
  //       <h2>{props.title}</h2>
  //       <p>{props.content}</p>
  //     </div>
  //   </div>
  // );

  // const CardContainer = (props) => (
  //   <div className="cards-container">
  //     {props.cards.map((card) => (
  //       <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
  //     ))}
  //   </div>
  // );

  // class App extends React.Component {
  //   render() {
  //     const cardsData = [
  //       {
  //         id: 1,
  //         title: books[0].title,
  //         content: books[0].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[0].image,
  //       },
  //       {
  //         id: 2,
  //         title: books[1].title,
  //         content: books[1].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[1].image,
  //       },
  //       {
  //         id: 3,
  //         title: books[2].title,
  //         content: books[2].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[2].image,
  //       },
  //       {
  //         id: 4,
  //         title: books[3].title,
  //         content: books[3].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[3].image,
  //       },
  //       {
  //         id: 5,
  //         title: books[4].title,
  //         content: books[4].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[4].image,
  //       },
  //       {
  //         id: 6,
  //         title: books[5].title,
  //         content: books[5].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[5].image,
  //       },
  //       {
  //         id: 7,
  //         title: books[6].title,
  //         content: books[6].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[6].image,
  //       },
  //       {
  //         id: 8,
  //         title: books[7].title,
  //         content: books[7].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[7].image,
  //       },
  //       {
  //         id: 9,
  //         title: books[8].title,
  //         content: books[8].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[8].image,
  //       },
  //       {
  //         id: 10,
  //         title: books[9].title,
  //         content: books[9].user.username,
  //         imgUrl: "http://127.0.0.1:8000" + books[9].image,
  //       },
  //     ];

  //     return (
  //       <div className="container" style={{ marginTop: "3%" }}>
  //         <CardContainer cards={cardsData} />
  //       </div>
  //     );
  //   }
  // }

  // ReactDOM.render(<App />, document.querySelector("#app"));

  ////////////////////////////////////////////////////////

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
