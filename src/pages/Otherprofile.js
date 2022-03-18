import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Otherprofile() {
  const [profile, setprofile] = useState({});
  const [books, setbooks] = useState([]);
  const [rate, setrate] = useState("");
  const { id } = useParams();
  const nav = useNavigate();
  const loggeduser = () => {
    return localStorage.getItem("authTokens");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axiosInstance.get("/others_profile/" + id).then((res) => {
      setprofile(res.data);
      axiosInstance.get("show_rate/" + res.data.id).then((res) => {
        setrate(parseFloat(res.data));
      });
    });
    axiosInstance
      .get("show_other_user_books/" + id)
      .then((res) => setbooks(res.data));
  }, []);
  const order = (id) => {
    axiosInstance.post("exchange_book/" + id).then((res) => {
      console.log(res);
      toast.success(`you've been successfully orderd the book !`, {
        position: toast.POSITION.TOP_CENTER,
      });
      nav("/");
    });
  };

  const send = (e) => {
    e.preventDefault();
    console.log(e.target.content.value)
    if (e.target.content.value === ""){
            toast.error('message is empty !')
    } 
    else {
        axiosInstance.post('message/' + id,{'content' : e.target.content.value}).then(
           res => {toast.success(`message sent succefully !`, {
                position: toast.POSITION.TOP_CENTER
              });
              e.target.content.value = ''
            }
        )
    }
  }
  return (
    <>
      <div class="container emp-profile">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src={"http://127.0.0.1:8000" + profile.image} alt="" />
              </div>
              <div className="message-area">
                <div>
                <form  onSubmit={(e) => send(e)}>
                  <label for="exampleFormControlTextarea1" class="form-label" style={{marginTop:"10%"}}>Send <b>{profile.username}</b> a Message!</label>
                  <textarea class="form-control" name='content' rows="3"></textarea>
                  <button className='btn btn-primary mt-2'type="submit" > Send </button>
                </form>
                </div>
             
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5 className="user-name">{profile.username}</h5>
                <h6 style={{ textTransform: "capitalize" }}>
                  {profile.country}
                </h6>
                <div className="stars">
                {rate ? (
                    <Stack style={{ display: "inline" }} spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                ) : <span>-----</span>}
                  
                  </div>
                {/* <div className="proile-rating">
                  <b>RATE :</b>{" "}
                  {rate ? (
                    <Stack
                      style={{ display: "inline", color: "#2c9db7" }}
                      spacing={1}
                    >
                      <Rating
                        name="half-rating-read"
                        defaultValue={rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  ) : (
                    
                  )}
                </div> */}
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
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Books
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div class="col-md-12">
                  <div class="tab-content profile-tab" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Gender</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{ textTransform: "capitalize" }}>
                            {profile.gender}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Date of Birth</label>
                        </div>
                        <div className="col-md-6">
                          <p>{profile.date_of_birth}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Location</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{ textTransform: "capitalize" }}>
                            {profile.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="row row-cols-1 row-cols-md-2 g-4">
                        {books.map((book) => {
                          return (
                            <div class="col">
                              <div class="card book-card h-100">
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
                                  {loggeduser() ? (
                                    <button
                                      type="button"
                                      class="btn btn-secondary btn-sm ms-2"
                                      onClick={(e) => order(book.id)}
                                    >
                                      Order
                                    </button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Otherprofile;
