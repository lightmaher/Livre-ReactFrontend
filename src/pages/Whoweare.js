import React, { useState } from "react";
import "./Whoweare.css";

function Whoweare() {
  return (
    <>
    
      <div className="whoweare pb-5 ps-5 pe-5">
        <div>
          <h1 className="heading-text text-center mb-5 mt-1 fw-bold ">Who we Are</h1>
          <img src="./whoweare.jpg" className="img-fluid" alt="..." />

          <h3 className="heading-text text-center mb-5 mt-5 " >We Are a Group of ancient readers  that still keeps the value of reading  , but sometimes they are searching and searching without finding the desired book so we came with LIVRE  to find your stray with Exchanging or Donating</h3>
        </div>
        <div className="row">
            <div className="col m-3">
              <div className="card " style={{ width: "18rem" ,borderRadius: "50%" , border:'none' }}>
                <img src="./tarek.jpeg" style={{ borderRadius: "50%" }} className="card-img-top img-thumbnail" alt="Tarek" />
                <div className="card-body ">
                  <h5 className="card-title heading-text fs-3 text-center pb-3">Tarek Eldebsy</h5>
                  <a href="https://www.linkedin.com/in/tarek-khalil-476452148/" className="btn btn-primary mx-auto justify-content-center ">
                    Linkedin
                  </a>
                </div>
              </div>
              </div>


            <div className="col m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="./Nour.jpeg"
                  className="card-img-top img-thumbnail "
                  alt="Nour"
                />
                <div className="card-body">
                  <h5 className="card-title heading-text fs-3 text-center pb-3">Nour Maher</h5>
                  <a href="www.google.com" className="btn btn-primary">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="col m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="./yasmina.jpeg"
                  className="card-img-top img-thumbnail"
                  alt="Yasmina"
                />
                <div className="card-body">
                  <h5 className="card-title heading-text fs-3 text-center pb-3">Yasmina Mohamed</h5>
                  <a href="www.google.com" className="btn btn-primary">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img src="./salma.jpg" className="card-img-top img-thumbnail " alt="Salma" />
                <div className="card-body">
                  <h5 className="card-title heading-text fs-3 text-center pb-3">Salma Basyouuni</h5>
                  <a href="https://www.linkedin.com/in/tarek-khalil-476452148/" className="btn btn-primary">
                    Linkedin
                  </a>
                </div>
              </div>
              </div>


            <div className="col m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="./yousef.jpg"
                  className="card-img-top img-thumbnail "
                  alt="Yousef"
                />
                <div className="card-body">
                  <h5 className="card-title  heading-text fs-3 text-center pb-3">Yousef Mohamed</h5>
                  <a href="www.google.com" className="btn btn-primary">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="col m-3">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="./Ebram.jpeg"
                  className="card-img-top img-thumbnail"
                  alt="Ebram"
                />
                <div className="card-body">
                  <h5 className="card-title heading-text fs-3 text-center pb-3">Ebram Tooma</h5>
                  <a href="https://eg.linkedin.com/in/ebram-tooma-a4901910a" className="btn btn-primary">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Whoweare;
