import React from 'react'
import axios from "axios";
import  { useState } from "react";
import { useEffect , useRef  } from "react";
import { Link, useParams } from "react-router-dom";
import  {axiosInstance}  from "../utils/axiosInstance";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'




function Otherprofile() {
    const [profile, setprofile] = useState({});
    const [books, setbooks] = useState([]);
    const {id} = useParams()
    const nav = useNavigate()
    const loggeduser = () =>{

    return localStorage.getItem('authTokens')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axiosInstance.get("/others_profile/" + id).then((res) => setprofile(res.data));
        axiosInstance.get("show_other_user_books/" + id).then((res) => setbooks(res.data));
      }, []);
      const order = (id) =>{
        axiosInstance
          .post("exchange_book/" + id)
          .then((res) => {console.log(res);
            toast.success(`you've been successfully orderd the book !`, {
              position: toast.POSITION.TOP_CENTER
            });
          nav('/')
          });
      }
  return (
    <>
    <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={"http://127.0.0.1:8000" + profile.image} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                  
                                    <h5>{profile.username}</h5>
                                    <h6>
                                       {profile.location}
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Books</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                          <Link to={`/message/${profile.id}`} className='btn btn-info' > Send Message </Link>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                          </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                        {books.map((book) => {
                                            return (
                                              <div className="col-md-6">
                                                <div class="card mb-3">
                                                  <div class="row g-0">
                                                    <div class="col-md-4">
                                                      <img
                                                        src={"http://127.0.0.1:8000" + book.image}
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
                                  { loggeduser() ?
                                  <button
                                    type="button"
                                    class="btn btn-secondary btn-sm ms-2"
                                    onClick={(e) => order(book.id)}
                                  >
                                    Order
                                  </button> : null
                                        }
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
  )
}

export default Otherprofile