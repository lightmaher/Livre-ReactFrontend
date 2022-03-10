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
 
   const rate = (e , userid , transid) =>{
    e.preventDefault();
    console.log(e.target.rate.value)
    axiosInstance.post('rate/' + userid , {'rate' : e.target.rate.value }).then("worked")
    axiosInstance
        .post("decline_exchange/" + transid)
        .then((res) => {
          toast.success(`you've been successfully Finished transaction  !`, {
            position: toast.POSITION.TOP_CENTER
          });
        });
        getTrans()
        window.location.reload()
   }
   const getTrans = () => {
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
        <h3 class="card-title border-secondary"> Sender Information</h3>
        <hr></hr>
        <h5 class="card-text">{transaction.tr_sender.username}</h5>
        <h5 class="card-text">{transaction.tr_sender.phone}</h5>
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
          <option value="4" > 4</option>
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
  {/* <!-- Rating button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Rating
</button>

{/* <!-- Rating --> */}
{/* <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Rating</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method='POST'>
        <select name='rate'>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four"> 4</option>
          <option value="five">5</option>
          </select>
          <button type='submit' className='btn btn-primary'> Rate </button>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
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