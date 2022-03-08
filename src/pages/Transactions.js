import React from 'react'
import  { useState } from "react";
import { useEffect , useRef  } from "react";
import { Link } from "react-router-dom";
import  {axiosInstance}  from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
function Transactions() {
const [receivedtransactions, setreceivedtransactions] = useState([]);
const [accepteduser,setaccepteduser] = useState([]);
useEffect(() => {
    getTrans()
  }, []);
  const nav = useNavigate()
  const deleterequest = (e,id) =>{
    e.preventDefault();
    axiosInstance
        .post("decline_exchange/" + id)
        .then((res) => {
          toast.success(`you've been successfully deleted transaction  !`, {
            position: toast.POSITION.TOP_CENTER
          });
        });
        nav('')
        getTrans()
   }
   const getTrans = () =>{
    axiosInstance
    .get("user_reciver_transaction")
    .then((res) => setreceivedtransactions(res.data));
   }
  return (
    <>
    <div className='container'>
     <div className='row'>
    {receivedtransactions.filter(name => name.is_accepted).map(transaction => (
 <div class="card col-5 text-center mt-5 ms-2">
 <div class="card-header">
   Request
 </div>
 <div class="card-body">
   <h5 class="card-title text-left"> Book Name : {transaction.book.title}</h5>
   
   <div class="card">
      <div class="card-body">
        <h3 class="card-title"> Sender Information</h3>
        <hr></hr>
        <h5 class="card-text">{transaction.tr_sender.username}</h5>
        <h5 class="card-text">{transaction.tr_sender.phone}</h5>
      </div>
    </div>
    
   <button  onClick={(e)=> deleterequest(e,transaction.id)} class="btn btn-danger mt-2">Delete Request</button>
 </div>
 <div class="card-footer text-muted">
   
 </div>
</div>
))}
  </div>
  </div>
    </>
     )
}

export default Transactions