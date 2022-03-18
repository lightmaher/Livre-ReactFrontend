import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import "./Messages.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Messages() {
  const [Messages, setMessages] = useState([]);
  const [userid, setuserid] = useState(0);

  const [sentMessages, setsentMessages] = useState([]);
  const [sentusers, setsentusers] = useState([]);
  const [user, setuser] = useState("");

  useEffect(() => {
    getmessages();
    sendusers();
  }, []);
  useEffect(() => {
    console.log("count2 changed!");
  }, [Messages]);
  const getmessages = () => {
    axiosInstance.get("messages").then((res) => {
      setMessages(res.data);
    });
    axiosInstance.get("sentmessages").then((res) => {
      setsentMessages(res.data);
    });
  };
  const sendusers = (e) => {
    axiosInstance.get("sendusers").then((res) => {
      setsentusers(res.data);
    });
  };
  const sendmessage = (e) => {
    e.preventDefault();
    if (e.target.content.value === "") {
      toast.error("message is empty !");
    } else {
      axiosInstance
        .post("message/" + userid, { content: e.target.content.value })
        .then((res) => {
          toast.success(`message sent succefully !`, {
            position: toast.POSITION.TOP_CENTER,
          });
          e.target.content.value = "";
          getmessages();
        });
    }
  };
  const showmessage = (e, username, id) => {
    e.preventDefault();
    setuser(username);
    setuserid(id);
    console.log(user);
  };
  const deletemessage = (e, id) => {
    e.preventDefault();
    axiosInstance.post("delmessage/" + id).then((res) => {
      if (res.status === 200) {
        getmessages();
      }
    });
  };

  return (
    <div style={{ marginTop: "7%", height: "100vh" }}>
      <div class="container mt-3">
        <div class="row clearfix border">
          <div class="col-lg-12">
            <div class="card chat-app">
              <div id="plist" class="people-list">
                <div class="input-group">
                  <div class="input-group-prepend"></div>
                </div>
                <ul class="list-unstyled chat-list  mb-0">
                  {sentusers.map((user) => {
                    return (
                      <>
                        <li
                          class="clearfix border border-dark rounded mt-1"
                          onClick={(e) => {
                            showmessage(e, user.username, user.id);
                          }}
                        >
                          <div class="about">
                            <img
                              style={{ height: "50px", width: "50px" }}
                              src={"http://127.0.0.1:8000/" + user.image}
                              alt=".."
                            />
                            <span
                              class="name"
                              style={{ fontSize: "130%", color: "#2c9db7" }}
                            >
                              {user.username}{" "}
                            </span>
                            {/* <div class="status"> <i class="fa fa-circle offline"></i></div>  */}
                            {/* <a className='btn btn-sm' style={{backgroundColor:"#2c9db7", color:"#ffffff"}} onClick={(e)=> {showmessage(e, user.username , user.id)}}> Show Messages </a>                                           */}
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div class="chat">
                <div class="chat-header clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      {/* <a  data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"> </img>
                            </a> */}
                      <div class="chat-about">
                        <h4 class="m-b-0" style={{ color: "#5f6161" }}>
                          {" "}
                          {user}{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-history">
                  <ul class="m-b-0">
                    {Messages.filter(
                      (name) =>
                        name.m_sender.username === user ||
                        name.m_receiver.username === user
                    )
                      .slice(-5)
                      .map((message) => (
                        <>
                          {message.m_receiver.username === user ? (
                            <li class="clearfix">
                              <div class="message-data text-end">
                                <span class="message-data-time">
                                  {message.date_creation}
                                </span>
                              </div>
                              <div class="message other-message float-right">
                                {" "}
                                {message.content}
                              </div>
                            </li>
                          ) : (
                            <>
                              <li class="clearfix">
                                <div class="message-data ">
                                  <span class="message-data-time">
                                    {message.date_creation}
                                  </span>
                                </div>
                                <div class="message my-message">
                                  {message.content}
                                </div>
                              </li>
                            </>
                          )}
                        </>
                      ))}
                  </ul>
                </div>
                {user ? (
                  <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                      <form
                        method="POST"
                        className="col-12 m-2"
                        onSubmit={(e) => sendmessage(e)}
                      >
                        <div class="input-group-prepend">
                          <button
                            className="btn btn-sm m-2"
                            style={{
                              backgroundColor: "#2c9db7",
                              color: "#ffffff",
                            }}
                          >
                            {" "}
                            Send{" "}
                          </button>
                        </div>
                        <input
                          type="text"
                          name="content"
                          class="form-control"
                          placeholder="Enter text here..."
                        />
                      </form>
                    </div>
                  </div>
                ) : (
                  <img className="ms-5" src="chat.jpg" alt={"image"}></img>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
