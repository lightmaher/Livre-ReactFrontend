import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Transactions() {
  const [receivedtransactions, setreceivedtransactions] = useState([]);
  const [senttransactions, setsenttransactions] = useState([]);

  const [accepteduser, setaccepteduser] = useState([]);
  useEffect(() => {
    getTrans();
  }, []);
  const nav = useNavigate();

  const rate = (e, userid, transid) => {
    e.preventDefault();
    console.log(e.target.rate.value);
    axiosInstance
      .post("rate/" + userid, { rate: e.target.rate.value })
      .then("worked");
    axiosInstance.post("finishexchange/" + transid).then((res) => {
      toast.success(`you've been successfully Finished transaction  !`, {
        position: toast.POSITION.TOP_CENTER,
      });
      getTrans();
    });
  };
  const getTrans = () => {
    console.log("work");
    axiosInstance.get("user_reciver_transaction").then((res) => {
      setreceivedtransactions(res.data);
      console.log(res.data);
    });
    axiosInstance
      .get("user_sender_transaction")
      .then((res) => setsenttransactions(res.data));
  };
  return (
    <>
      <div
        class="container-fluid"
        style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}
      >
        <div class="row justify-content-md-center">
          <h1
            style={{
              color: "#2c9db7",
              margin: "5%",
               textAlign:"center",
              fontWeight: "700",
              fontFamily: "cursive",
              fontSize: "4VW",
            }}
          >
            Received requests
          </h1>
          {receivedtransactions
            .filter((name) => name.is_accepted)
            .map((transaction) => (
              <>
                <div class="col">
                  <div
                    style={{
                      fontFamily: "Bulmer MT Std",
                      fontWeight: "bold",
                      width: "30vw",
                      height: "40vh",
                      //  margin:"7% 0%",
                      color: "rgb(46, 46, 46)",
                      textStyle: "Bulmer MT Std",
                      backgroundColor: "#303030",
                      textAlign: "center",
                      borderRadius: "60PX",
                      // marginTop:"3vW",
                    }}
                  >
                    <div>
                      <h2 style={{ color: "#3bcfec", padding: "4%" }}>
                        {" "}
                        {transaction.tr_sender.username}
                      </h2>
                      <h3 style={{ color: "#fff", fontSize: "1.9vw" }}>
                        want to have your book
                      </h3>
                      <h3
                        class=" text-right"
                        style={{ color: "#3bcfec", fontSize: "1.9vw" }}
                      >
                        {transaction.book.title}
                      </h3>
                      <h2 style={{ color: "#fff" }}>
                        {" "}
                        {transaction.tr_receiver.username}{" "}
                      </h2>
                      <h5 style={{ color: "#fff", fontSize: "1vw" }}>
                        you can connect via messages or phone <br></br>
                        {transaction.tr_sender.phone}{" "}
                      </h5>
                      <h5 style={{ color: "#fff", padding: "0.5%" }}>
                        after that you can Finish the request and evaluate adeal
                      </h5>
                    </div>

                    <h6 style={{ color: "#fff" }}>
                      thank you {transaction.tr_receiver.username} for using
                      livre{" "}
                    </h6>
                    <button
                      style={{
                        color: "#FFF",
                        width: "12VW",
                        height: "7vh",
                        fontSize: "1.5vw",
                        margin: "0.3vw",
                      }}
                      type="button"
                      class="btn btn-info btn-lg"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Finish request
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div
                          class="modal-content"
                          style={{ backgroundColor: "#2c9db7" }}
                        >
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              {" "}
                              Rating{" "}
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form
                              method="POST"
                              onSubmit={(e) =>
                                rate(
                                  e,
                                  transaction.tr_sender.id,
                                  transaction.id
                                )
                              }
                            >
                              <h3> evaluate a deal </h3>
                              <select name="rate" className="form-control">
                                <option selected>Select Rate</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4"> 4</option>
                                <option value="5">5</option>
                              </select>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  {" "}
                                  Rate{" "}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        
      </div>

      <div class="container-fluid">
        <div class="row justify-content-md-center">
          
          <h1
            style={{
              color: "#303030",
              margin: "3.3%",
               textAlign:"center",
              fontWeight: "700",
              fontFamily: "cursive",
              fontSize: "4VW",
            }}
          >
            Send requests
          </h1>

          {senttransactions
            .filter((name) => name.is_accepted)
            .map((transaction) => (
              <>
                <div class="col">
                  <div
                    style={{
                      fontFamily: "Bulmer MT Std",
                      fontWeight: "bold",
                      height: "40vh",
                      width: "30vw",
                      //  margin:"7% 0%",
                      color: "rgb(46, 46, 46)",
                      textStyle: "Bulmer MT Std",
                      backgroundColor: "#2c9db7",
                      textAlign: "center",
                      borderRadius: "60PX",
                      // marginTop:"3vW",
                    }}
                  >
                    <div>
                      <h2 style={{ color: "#fff", padding: "4%" }}>
                        {" "}
                        Hello {transaction.tr_sender.username}{" "}
                      </h2>
                      <h3
                        class=" text-right"
                        style={{
                          color: "#303030",
                          fontSize: "2vw",
                          fontWeight: "bolder",
                        }}
                      >
                        {" "}
                        you ordered <br></br>
                        {transaction.book.title}
                      </h3>
                      <h2
                        style={{
                          color: "#fff",
                          fontSize: "1.6vw",
                          fontWeight: "500",
                        }}
                      >
                        owned by : {transaction.tr_receiver.username}
                      </h2>

                      <h5
                        style={{
                          color: "#fff",
                          fontSize: "1vw",
                          padding: "2%",
                        }}
                      >
                        you can connect via messages or phone <br></br>
                        {transaction.tr_receiver.phone}{" "}
                      </h5>
                    </div>

                    {/* <img 
    src={"http://127.0.0.1:8000" + transaction.book.image}
    class="card-img-top"
    style={{hieght:"2vh" ,width:"15vw",borderRadius:"15PX"}}
    alt="..."
  /> */}

                    <h6 style={{ color: "#fff" }}>
                      thank you {transaction.tr_sender.username} for using livre{" "}
                    </h6>
                    <button
                      style={{
                        color: "#FFF",
                        width: "12VW",
                        height: "7vh",
                        fontSize: "1.5vw",
                        margin: "0.5vw",
                      }}
                      type="button"
                      class="btn btn-dark btn-lg"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Finish
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div
                          class="modal-content"
                          style={{ backgroundColor: "#303030" }}
                        >
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              {" "}
                              Rating{" "}
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form
                              method="POST"
                              onSubmit={(e) =>
                                rate(
                                  e,
                                  transaction.tr_sender.id,
                                  transaction.id
                                )
                              }
                            >
                              <h3> evaluate a deal </h3>
                              <select name="rate" className="form-control">
                                <option selected>Select Rate</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" class="btn btn-info">
                                  Rate
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>

      {/* <div className='container'>
     <div className='row'>
     <h1 className='text-dark'> Sent request</h1>
 {senttransactions.filter(name => name.is_accepted).map(transaction => (
  <>
 <div class="col-5">
 <div class="">
   Request
 </div>
 <div class="">
   <h5 class=" text-left"> Book Name : {transaction.book.title}</h5>
   
   <div class="">
      <div class="">
        <h3 class=" border-secondary"> Reciver Information</h3>
        <hr></hr>
        <h5 class="card-text">{transaction.tr_receiver.username}</h5>
        <h5 class="card-text">{transaction.tr_receiver.phone}</h5>
      </div>
    </div>
    
<button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal">
  Finish Transaction
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Rating </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method='POST' onSubmit={(e) => rate(e, transaction.tr_sender.id , transaction.id  ) }>
        <h3> Transactions Rate </h3>
        <select name='rate' className='form-control'>
        <option selected>Select Rate</option>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>
          </select>
          <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit"  class="btn btn-primary"> Rate </button>
      </div>
          </form>
      </div>
     
    </div>
  </div>
</div>
 </div>
 <div class="card-footer text-muted">
 </div>
</div>
</>
))}
</div>
</div> */}
    </>
  );
}

export default Transactions;
