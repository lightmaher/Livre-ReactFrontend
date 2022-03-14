import React, { useState } from "react";
import "./Whoweare.css";

function Whoweare() {
  return (
    <>
      <div className="container mt-5">
        <div className="row  ">
          <div className="col-md-4 col-sm-12 ">
            <div className="mt-5 ms-3">
              <h1 className="heading-text  text-center fw-bold ">Who we Are</h1>
              <h5 className=" mt-4 pt-4 text fw-bolder">
                We Are a Group of ancient readers that still keeps the value of
                reading , but sometimes they are searching and searching without
                finding the desired book so we came with LIVRE to find your
                stray with Exchanging or Donating.
              </h5>
            </div>
          </div>

          <div className="col-md-8  col-sm-12">
            <div className="float-end  " >
            <img src="./About-Us.png" className="img-fluid " width={750} alt="..." />

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

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
              Tarek Eldebsy
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary heading-text " 
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

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
            Nour Maher
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary "
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

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
            Yasmina Mohamed
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary "
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
                alt="Salma Basyouuni"
              />
            </div>

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
            Salma Basyouuni
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary "
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

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
            Yousef Mohamed
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary "
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

            <h5 className="heading-text fs-3 text-center pb-3 mt-4">
              Ebram Tooma
            </h5>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/tarek-khalil-476452148/"
                className="btn btn-primary "
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
