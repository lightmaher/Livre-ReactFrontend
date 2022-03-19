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
import { height, padding, textAlign, width } from "@mui/system";
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
            <h1 style={{fontSize:"3.5vw", textAlign:"left"}}>Your online book Library </h1>
            <p style={{textAlign:"left"}}>ready for exchange or donate or more and more with Zero Cost, discover the world with livre</p>
          </div>
          <InputGroup controlId="floatingInput" label="Search" className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search for your desired Book to get it for free or exchange "
              style={{ height: "5em" }}
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link
              className="btn btn-info "
              variant="outline-secondary"
              style={{ color: "#ffff", width: "9em", fontSize: "2.1VW" }}
              id="button-addon2  "
              type="button"
              to={"/search/" + searchValue}
            >
              <span
                style={{ padding: "5%", marginLeft: "4%", marginRight: "3.5%" }}
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
              style={{ height: "50em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book2.png`)}
              alt="Second slide"
              style={{ height: "50em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/Book3.png`)}
              alt="Third slide"
              style={{ height: "50em" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../Images/slider/b2.png`)}
              alt="Third slide"
              style={{ height: "50em" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="clear"></div>

      <div className="container-fluid abliv ">
        <div className="row ">
          <div
            className="card mb-4"
            style={{ maxWidth: "80VW", margin: "9% 10%", borderRadius: "25px" }}
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
                      // color: "rgb(46, 46, 46)",
                      color: "#2c9db7",
                      textTransform: "capitalize",
                      textStyle: "Bulmer MT Std",
                    }}
                  >
                    About livre
                  </h4>
                  <p className="card-text" style={{ fontSize: "0.8vw" }}>
                    We are a group of avid readers that still appreciate the value
                    of reading , but sometimes it's hard and expensive 
                    to find the desired book so we came with LIVRE to
                    give it a kick, whether it's Exchanging or Donating that get you there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div>
        <h3
          style={{
            fontFamily: "Bulmer MT Std",
            fontWeight: "900 regular",
            fontSize: "5vw",
            lineHeight: "90px",
            color: "#2c9db7",
            textStyle: "Bulmer MT Std",
            textAlign: "center",
            margin: "4%",
          }}
        >
          Categories
        </h3>
        <Categories />
      </div>
      <div className="clear"></div>
    <div className="abliv" style={{marginTop:"7%"}}>
      <div>
        <div className="row">
          <h3
            style={{
              fontFamily: "Bulmer MT Std",
              fontWeight: "900 regular",
              fontSize: "5vw",
              lineHeight: "90px",
              color: "rgb(46, 46, 46)",
              textStyle: "Bulmer MT Std",
              textAlign: "center",
              margin: "3% 0",
            }}
          >
            Who we are
          </h3>
        </div>

        <div className="row who" style={{margin: "0% 2.5%"}}>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./tarek.jpeg"
              className="circle text-center "
              alt="Tarek"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d" }}
            >
              Tarek Eldebsy
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./Nour.jpeg"
              className="circle  text-center "
              alt="Nour Maher"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d", textAlign: "center" }}
            >
              Nour Maher
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./yasmina.jpeg"
              className="circle  "
              alt="Yasmina Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d" }}
            >
              Yasmina Mohamed
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./salma.jpg"
              className="circle text-center "
              alt="Salma Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d" }}
            >
              Salma Mohamed
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./Ebram.jpeg"
              className="circle text-center "
              alt="Ebram Tooma"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d" }}
            >
              Ebram Tooma
            </h6>
          </div>
          <div className="col-2">
            <img
              style={{ width: "15rem" }}
              src="./yousef.jpg"
              className="circle text-center "
              alt="Yousef Mohamed"
            />
            <h6
              className="heading-text fs-3 text-center pb-3 mt-2"
              style={{ color: "#5f5d5d" }}
            >
              Yousef Mohamed
            </h6>
          </div>
        </div>
      </div>
      </div>

      <div className="clear"></div>

      <div className="container-fluid ">
        <div className="row " style={{marginBottom:"5%"}}>
          <div
            className="card mb-4"
            style={{
              maxWidth: "80VW",
              margin: "6% 10%",
              borderRadius: "25px",
              height: "30vh",
              backgroundColor: "aliceblue"
            }}
          >
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h3
                    className="card-title"
                    style={{
                      margin: " 7% 15%",
                      fontFamily: "Bulmer MT Std",
                      fontStyle: "italic",
                      fontWeight: "600 regular",
                      fontSize: "6vw",
                      lineHeight: "90px",
                      color: "rgb(46, 46, 46)",
                      textTransform: "capitalize",
                      textStyle: "Bulmer MT Std",
                    }}
                  >
                    Contact us
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <a
                   href='mailto:Livre@info.com'
                    style={{
                    margin: "20% -8%",
                    width: "20vw",
                    height: "10vh",
                    color: "rgb(46, 46, 46)",
                    fontWeight: "400",
                    fontSize: "2vw",
                    textAlign:"center",
                    paddingTop : "3%",
                    border : "solid 6px #fff",
                    borderRadius : "15px",
                    fontFamily: "Bulmer MT Std",
                  }}
                  type="button"
                  class="btn btn-outline-info btn-lg"
                >
                  Contact Livre
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
