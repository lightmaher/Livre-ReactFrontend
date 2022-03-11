import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import slide from './src/Images/slide.png'
export default function Home() {
  const [searchValue, setSearchValue] = useState([]);

  const [resulte, setResulte] = useState(
    []

    // 'search': searchValue,
    // 'res': []
  );

  const params = useParams();

  console.log(resulte);

  return (
    <>
      <div>
        {/* <div className="search-bar">
          <div className="st">
            <h1>Your online book Library with Zero Cost</h1>
            <small>ready for exchange or donate or more and more</small>
          </div>
          <InputGroup controlId="floatingInput" label="Search" className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search for your desired Book to get it for free or exchange "
              style={{ height: "4em" }}
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link
              className="btn btn-info "
              variant="outline-secondary"
              style={{ color: "#ffff", width: "9em", fontSize: "1.8VW" }}
              id="button-addon2  "
              type="button"
              to={"/search/" + searchValue}
            >
              <span
                style={{ padding: "6%", marginLeft: "4%", marginRight: "3.5%" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </span>
            </Link>
          </InputGroup>
        </div> */}
        
        
        <Carousel variant="dark" className="car">
        <div className="search-bar">
          <div className="st">
            <h1>Your online book Library with Zero Cost</h1>
            <small>ready for exchange or donate or more and more</small>
          </div>
          <InputGroup controlId="floatingInput" label="Search" className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search for your desired Book to get it for free or exchange "
              style={{ height: "4em" }}
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link
              className="btn btn-info "
              variant="outline-secondary"
              style={{ color: "#ffff", width: "9em", fontSize: "1.8VW" }}
              id="button-addon2  "
              type="button"
              to={"/search/" + searchValue}
            >
              <span
                style={{ padding: "6%", marginLeft: "4%", marginRight: "3.5%" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </span>
            </Link>
          </InputGroup>
        </div>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book1.png`)}
              alt="First slide"
              style={{ height: "35em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book2.png`)}
              alt="Second slide"
              style={{ height: "35em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book3.png`)}
              alt="Third slide"
              style={{ height: "35em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/b2.png`)}
              alt="Third slide"
              style={{ height: "35em" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="clear"></div>

      <div className="sec-2">
        <div className="container sec2-cont">
          <div className="sec2-p">
            <h1 style={{ color: "#2c9db7" }}>Take a Tour</h1>
            <hr></hr>
            <p>
              Toggle our website now and see books available for exchange or
              donate
            </p>
            <Link
              class="btn btn-primary"
              to="/books"
              style={{ backgroundColor: "#2c9db7", width: "18vw" }}
            >
              Take a tour
            </Link>
          </div>

          <img
            src={require(`../Images/slider/nav.jpeg`)}
            className="sec2-img"
            alt="..."
          />
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
}
