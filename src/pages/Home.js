import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import AddCategory from "../Components/AddCategory";
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
import Whoweare from "./Whoweare";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { height, textAlign, width } from "@mui/system";
import Categories from "./Categories";
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
        <Carousel variant="dark" className="car">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book1.png`)}
              alt="First slide"
              style={{ height: "40em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book2.png`)}
              alt="Second slide"
              style={{ height: "40em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book3.png`)}
              alt="Third slide"
              style={{ height: "40em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/b2.png`)}
              alt="Third slide"
              style={{ height: "40em" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="clear"></div>

      <div className="container-fluid abliv ">
        <div className="row ">
          <div
            className="card mb-4"
            style={{ maxWidth: "80VW", margin: "6% 8%", borderRadius: "25px" }}
          >
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  style={{
                    margin: "3% 1% 3% 4%",
                    width: "90%",
                    height: "30vh",
                    borderRadius: "25px",
                  }}
                  src={require(`../Images/slider/about livre.jpg`)}
                  class="img-fluid img-rounded img-responsive"
                  alt="aboutlivre"
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h4
                    className="card-title"
                    style={{
                      fontFamily: "Bulmer MT Std",
                      fontStyle: "italic",
                      fontWeight: "500 regular",
                      fontSize: "4vw",
                      lineHeight: "90px",
                      color: "#000000",
                      textTransform: "capitalize",
                      textStyle: "Bulmer MT Std",
                    }}
                  >
                    About livre
                  </h4>
                  <p className="card-text" style={{ fontSize: "0.8vw" }}>
                    We Are a Group of ancient readers that still keeps the value
                    of reading , but sometimes they are searching and searching
                    without finding the desired book so we came with LIVRE to
                    find your stray with Exchanging or Donating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="clear"></div>
      <div>
        <Categories/>
      </div> */}
      <div className="clear"></div>

      <div className="container-fluid abliv">
        <div className="row">
          <h3
            style={{
              fontFamily: "Bulmer MT Std",
              fontWeight: "900 regular",
              fontSize: "5vw",
              lineHeight: "90px",
              color: "#2c9db7",
              textStyle: "Bulmer MT Std",
              textAlign: "center",
              margin: "3%",
            }}
          >
            Who we are
          </h3>
        </div>

        <div className="row who">
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./tarek.jpeg"
              className="circle mt-2 text-center "
              alt="Tarek"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000" }}
            >
              Tarek Eldebsy
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./Nour.jpeg"
              className="circle mt-2 text-center "
              alt="Nour Maher"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000", textAlign: "center" }}
            >
              Nour Maher
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./yasmina.jpeg"
              className="circle  "
              alt="Yasmina Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000" }}
            >
              Yasmina Mohamed
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./salma.jpg"
              className="circle mt-2 text-center "
              alt="Salma Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000" }}
            >
              Salma Mohamed
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./Ebram.jpeg"
              className="circle mt-2 text-center "
              alt="Ebram Tooma"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000" }}
            >
              Ebram Tooma
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "12rem" }}
              src="./yousef.jpg"
              className="circle mt-2 text-center "
              alt="Yousef Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#000000" }}
            >
              Yousef Mohamed
            </h6>
          </div>
        </div>
      </div>

      <div className="clear"></div>

      <div className="container-fluid abliv">
        <div className="row ">
          <div
            className="card mb-4"
            style={{
              maxWidth: "80VW",
              margin: "6% 8%",
              borderRadius: "25px",
              height: "30vh",
            }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h3
                    className="card-title"
                    style={{
                      margin: "7% 5%",
                      fontFamily: "Bulmer MT Std",
                      fontStyle: "italic",
                      fontWeight: "600 regular",
                      fontSize: "6vw",
                      lineHeight: "90px",
                      color: "#2c9db7",
                      textTransform: "capitalize",
                      textStyle: "Bulmer MT Std",
                    }}
                  >
                    Contactus
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <button
                  style={{
                    margin: "10%",
                    width: "30vw",
                    height: "15vh",
                    color: "#2c9db7",
                    fontWeight: "400",
                    fontSize: "2vw",
                  }}
                  type="button"
                  class="btn btn-outline-info btn-lg"
                >
                  contact livre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
