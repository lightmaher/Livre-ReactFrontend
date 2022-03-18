import React, { useState } from "react";
import "./Whoweare.css";

function Whoweare() {
  return (
    <>
      <div className="container mt-5">
        <div className="row  ">
          <div className="col-md-4 col-sm-12 ">
            <div className="ms-3 text-card-w" >
              <h1 className="heading-text  text-center fw-bold ">Who we Are</h1>
              <h5 className=" mt-4 pt-4 text fw-bolder" style={{color:"#5f5d5d"}}>
              We are a group of avid readers that still appreciate the value
                    of reading , but sometimes it's hard and expensive 
                    to find the desired book so we came with LIVRE to
                    give it a kick, whether it's Exchanging or Donating that get you there.
              </h5>
            </div>
          </div>

          <div className="col-md-8  col-sm-12">
            <div className="float-end  " >
            <img style={{width:"80vw",height:"75vh"}} src="./About-Us.png" className="img-fluid " alt="..." />

            </div>
          </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./tarek.jpeg"
                className="circle mt-5 text-center "
                alt="Tarek"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4" style={{color:"#5f5d5d"}}>
              Tarek Eldebsy
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn heading-text " 
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./Nour.jpeg"
                className="circle mt-5 text-center "
                alt="Nour Maher"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4"style={{color:"#5f5d5d"}}>
            Nour Maher
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn "
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./yasmina.jpeg"
                className="circle mt-5 text-center "
                alt="Yasmina Mohamed"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4" style={{color:"#5f5d5d"}}>
            Yasmina Mohamed
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn  "
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./salma.jpg"
                className="circle mt-5 text-center "
                alt="Salma Mohamed"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4"style={{color:"#5f5d5d"}}>
            Salma Mohamed
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn "
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./yousef.jpg"
                className="circle mt-5 text-center "
                alt="Yousef Mohamed"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4" style={{color:"#5f5d5d"}}>
            Yousef Mohamed
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn  "
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
              
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <img
                src="./Ebram.jpeg"
                className="circle mt-5 text-center "
                alt="Ebram Tooma"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4" style={{color:"#5f5d5d"}}>
              Ebram Tooma
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn "
                style={{backgroundColor: "#2c9db7",color:"#ffffff"}}
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whoweare;
