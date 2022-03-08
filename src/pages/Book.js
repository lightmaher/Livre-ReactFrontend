import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import axios from "axios";
import "./Book.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'



export default function Book() {
  let { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get("books/" + id)
      .then((res) => setbook(res.data));
  }, []);
  const nav = useNavigate()
  const [book, setbook] = useState({});
  const order = () =>{
    id = book.id
    axiosInstance
      .post("exchange_book/" + id)
      .then((res) => {console.log(res);
        toast.success(`you've been successfully orderd ${book.title} from ${book.user.username} !`, {
          position: toast.POSITION.TOP_CENTER
        });
      nav('/')
      });
  }
  return (
    <>
      <div className="container emp-book">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="book-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="book-head">
                <h5>{book.title}</h5>
                <h6>{book.cat?.name}</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div class="tab-content book-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Book Author</label>
                    </div>
                    <div className="col-md-6">
                      <p>{book.author}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Status</label>
                    </div>
                    <div className="col-md-6">
                      <p>{book.status}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Owner</label>
                    </div>
                    <div className="col-md-6">
                      <p>{book.user?.username}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Date of creation</label>
                    </div>
                    <div className="col-md-6">
                      <p>{book.date_creation}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Describtion</label>
                    </div>
                    <div className="col-md-6">
                      <p>{book.description}</p>
                    </div>
                  
                  </div>
            
                </div>
            
              </div>
            
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
  <button onClick={order} class="btn btn-primary" type="button">order</button>
</div>
          </div>
        </form>
      </div>
    </>
  );
}
