import axios from "axios";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

function Profile() {
  const [profile, setprofile] = useState({});
  const [books, setbooks] = useState([]);
  const [rate, setrate] = useState(0);
  const [postimage, setPostImage] = useState(null);


  const [receivedtransactions, setreceivedtransactions] = useState([]);
  const [orderedtransactions, setorderedtransactions] = useState([]);
  const isMounted = useRef(false);
  const nav = useNavigate();
  useEffect(() => {
    getprofile();
    getTrans();
  }, []);
  const getprofile = () =>{
    axiosInstance.get("profile").then((res) => {
      setprofile(res.data);
      axiosInstance.get("show_rate/" + res.data.id).then((res) => {
        console.log(res.data)
        setrate(parseFloat(res.data));
      });
    });

  }
  const showrate = () => {
    axiosInstance.get("show_rate/" + profile.username).then((res) => {
      console.log(res.data);
    });
  };
  const deleterequest = (e, id) => {
    e.preventDefault();
    axiosInstance.post("decline_exchange/" + id).then((res) => {
      toast.success(`you've been successfully deleted transaction  !`, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  };
  const getTrans = () => {
    axiosInstance.get("show_main_user_books").then((res) => setbooks(res.data));

    axiosInstance
      .get("user_reciver_transaction")
      .then((res) => setreceivedtransactions(res.data));
    axiosInstance
      .get("user_sender_transaction")
      .then((res) => setorderedtransactions(res.data));
  };
  const acceptrequest = (e, id) => {
    e.preventDefault();
    axiosInstance
      .post("accept_exchange/" + id)
      .then((res) => console.log(res.data));
    getTrans();
  };
const delbook = (e,id) =>{
  e.preventDefault();
  axiosInstance
      .post("delbook/" + id)
      .then((res) => {console.log(res.data);   getTrans()
      });
}
const changeimage = (e) => {
  e.preventDefault();
  let formData = new FormData();
  if (e.target.files[0]){
  formData.append('image' , e.target.files[0])
  } else {
    return 0
  }        
  axiosInstance.post('changeimage' , formData).then(
    res => {
      getprofile();
    }
  )
  
}
const deleterecive = (e, id) => {
    e.preventDefault();
    axiosInstance
      .post("decline_exchange/" + id)
      .then((res) => console.log(res.data));
    getTrans();
  };
  return (
    <div style={{marginTop:"5%"}} >
      <div className="container emp-profile" >
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={"http://127.0.0.1:8000" + profile.image} alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" accept="image/*"
                    className="form-control"
                    id="post-image" name="file" onChange={(e) => {changeimage(e)}}/>    
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5 className="user-name">{profile.username}</h5>
                <h6 style={{ textTransform: "capitalize" }}>
                  {profile.country}
                </h6>
                <div className="stars">
                {rate ? (
                    <Stack style={{ display: "inline" }} spacing={1}>
                      <Rating
                        name="half-rating-read"
                        value={rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                ) : <span><FontAwesomeIcon style={{color:"#ada9a9"}} icon={faStar} />
                          <FontAwesomeIcon style={{color:"#ada9a9"}} icon={faStar} />
                          <FontAwesomeIcon style={{color:"#ada9a9"}} icon={faStar} />
                          <FontAwesomeIcon style={{color:"#ada9a9"}} icon={faStar} />
                          <FontAwesomeIcon style={{color:"#ada9a9"}} icon={faStar} />
                </span> }
                  </div>
                {/* <div className="proile-rating" style={{color: "#2c9db7 !important"}}>
                  {rate ? (
                    <span className="stars"><Stack
                      style={{ display: "inline", color:"#2c9db7 !important" }}
                      spacing={1}
                      
                    >
                      <Rating
                        name="half-rating-read"
                        defaultValue={rate}
                        precision={0.5}
                        readOnly
                        
                      />
                    </Stack></span>
                  ) : (
                    <span>---</span>
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
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="recieved-tab"
                      data-toggle="tab"
                      href="#recieved"
                      role="tab"
                      aria-controls="recieved"
                      aria-selected="false"
                    >
                      Recieved Request
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="ordered-tab"
                      data-toggle="tab"
                      href="#ordered"
                      role="tab"
                      aria-controls="ordered"
                      aria-selected="false"
                    >
                      Ordered Request
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12">
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
                                  <button className="btn btn-danger" onClick={(e)=> delbook(e , book.id)}> Delete book </button>
                                </div>
                             
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        class="btn mt-4"
                        style={{
                          backgroundColor: "#2c9db7",
                          border: "#2c9db7",
                        }}
                      >
                        <Link to="/addbook">Add Book</Link>
                      </button>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="recieved"
                      role="tabpanel"
                      aria-labelledby="recieved-tab"
                    >
                      <div className="row">
                        {receivedtransactions
                          .filter((ftrans) => !ftrans.is_accepted)
                          .map((transaction) => {
                            return (
                              <div className="col-md-12">
                                <div class="card mb-3">
                                  <div class="row g-0">
                                    <div class="col-md-4">
                                      <img
                                        src={
                                          "http://127.0.0.1:8000" +
                                          transaction.book.image
                                        }
                                        class="img-fluid rounded-start"
                                        alt="picture"
                                      />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <p class="card-text">
                                          <span className="c-t">Title: </span>{" "}
                                          {transaction.book.title}
                                        </p>
                                        <p class="card-text">
                                          <span className="c-t">Author: </span>{" "}
                                          {transaction.book.author}
                                        </p>
                                        <p class="card-text">
                                          <span className="c-t">Sender: </span>{" "}
                                          {transaction.tr_sender.username}
                                        </p>
                                        <div>
                                          <button
                                            type="button"
                                            class="btn btn-sm ms-2"
                                            style={{backgroundColor:"#2c9db7",color:"#ffffff"}}
                                            onClick={(e) =>
                                              acceptrequest(e, transaction.id)
                                            }
                                          >
                                            Accept
                                          </button>
                                          <button
                                            type="button"
                                            class="btn btn-secondary btn-sm ms-2"
                                            onClick={(e) =>
                                              deleterecive(e, transaction.id)
                                            }
                                          >
                                            Decline
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="ordered"
                      role="tabpanel"
                      aria-labelledby="ordered-tab"
                    >
                      <div className="row">
                        {orderedtransactions.map((transaction) => {
                          return (
                            <div className="col-md-12">
                              <div className="card mb-3">
                                <div className="row g-0">
                                  <div className="col-md-4">
                                    <img
                                      src={
                                        "http://127.0.0.1:8000" +
                                        transaction.book.image
                                      }
                                      className="img-fluid rounded-start"
                                      alt="picture"
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <p className="card-text">
                                        <span className="c-t">Title: </span>{" "}
                                        {transaction.book.title}
                                      </p>
                                      <p className="card-text">
                                        <span className="c-t">Author: </span>{" "}
                                        {transaction.book.author}
                                      </p>
                                      <p className="card-text">
                                        <span className="c-t">Sender: </span>{" "}
                                        {transaction.tr_sender.username}
                                      </p>
                                      <button
                                        onClick={(e) =>
                                          deleterequest(e, transaction.id)
                                        }
                                        className="btn btn-danger"
                                      >
                                        {" "}
                                        Delete
                                      </button>
                                    </div>
                                  </div>
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
            <div className="col-md-2">
             <Link to='/editprofile' className="btn btn-secondary" > Edit Profile</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
