import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    axiosInstance.get("profile").then((res) => setprofile(res.data));
    axiosInstance.get("show_main_user_books").then((res) => setbooks(res.data));
    axiosInstance
      .get("user_reciver_transaction")
      .then((res) => setreceivedtransactions(res.data));
    axiosInstance
      .get("user_sender_transaction")
      .then((res) => setorderedtransactions(res.data));
  }, []);

  const [profile, setprofile] = useState({});
  const [books, setbooks] = useState([]);
  const [receivedtransactions, setreceivedtransactions] = useState([]);
  const [orderedtransactions, setorderedtransactions] = useState([]);

  return (
    <>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profile.username}</h5>
                <h6>{profile.location}</h6>
                <p className="proile-rating">
                  RATE : <span>8/10</span>
                </p>
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
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="">Website Link</a>
                <br />
                <a href="">Bootsnipp Profile</a>
                <br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a>
                <br />
                <a href="">Web Developer</a>
                <br />
                <a href="">WordPress</a>
                <br />
                <a href="">WooCommerce</a>
                <br />
                <a href="">PHP, .Net</a>
                <br />
              </div>
            </div>
            <div className="col-md-8">
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
                      <p>{profile.gender}</p>
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
                  {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div> */}
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    {/* <div class="card mb-3" style="max-width: 540px;">
                                              <div class="row g-0">
                                                <div class="col-md-4">
                                                  <img src="..." class="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div class="col-md-8">
                                                  <div class="card-body">
                                                    <h5 class="card-title">{book.title}</h5>
                                                    <p class="card-text">{book.description}</p>
                                                    <p class="card-text"><small class="text-muted">{book.author}</small></p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div> */}
                    {books.map((book) => {
                      return (
                        <div className="col-md-6">
                          {/* <li key={book.id}> 
                                                      {book.title}
                                                      </li> */}
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                  class="img-fluid rounded-start"
                                  alt="picture"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <Link to={`/book/${book.id}`}>
                                    <p class="card-title">{book.title}</p>
                                  </Link>
                                  <p class="card-text">
                                    <small class="text-muted">
                                      Author: {book.author}
                                    </small>
                                  </p>
                                  <p className="card-text">
                                    Status: {book.status}
                                  </p>
                                  <button
                                    type="button"
                                    class="btn btn-secondary btn-sm ms-2"
                                  >
                                    Order
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button type="button" class="btn btn-primary btn-sm">
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
                    {receivedtransactions.map((transaction) => {
                      return (
                        <div className="col-md-12">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                  class="img-fluid rounded-start"
                                  alt="picture"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <p class="card-title">
                                    {transaction.book.title}
                                  </p>
                                  <p class="card-text">
                                    <small class="text-muted">
                                      Author: {transaction.book.author}
                                    </small>
                                  </p>
                                  <p class="card-text">
                                    <small class="text-muted">
                                      Sender: {transaction.tr_sender.username}
                                    </small>
                                  </p>
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-sm ms-2"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-secondary btn-sm ms-2"
                                  >
                                    Decline
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
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                  className="img-fluid rounded-start"
                                  alt="picture"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <p className="card-title">
                                    {transaction.book.title}
                                  </p>
                                  <p className="card-text">
                                    <small class="text-muted">
                                      Author: {transaction.book.author}
                                    </small>
                                  </p>
                                  <p className="card-text">
                                    <small class="text-muted">
                                      Receiver:{" "}
                                      {transaction.tr_receiver.username}
                                    </small>
                                  </p>
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
        </form>
      </div>
    </>
  );
}

export default Profile;
