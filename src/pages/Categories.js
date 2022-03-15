import React from 'react'
import './Category.css';
import { useState, useEffect } from 'react'
// import { useContext } from 'react'
// import { AuthContext } from '../Context/AuthContext'
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Subscription from '../Components/Subscription';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'alertifyjs/build/css/alertify.css';
import { toast } from 'react-toastify';
import { axiosInstance } from '../utils/axiosInstance';
import ReactDOM from 'react-dom';


export default function Categories() {
  const [category, setCategory] = useState([])
  const [usercategorys, setuserCategorys] = useState([])

  const navigate = useNavigate();
  // const [subscription, updateSubscription]useState({
  //   props1: "subscription",
  //   props2: "unsubscription",
  // })
  useEffect(() => {
    showcats()
  }, [])
  const showcats = () =>{
    axios
    .get('http://127.0.0.1:8000/api/categorys')
    .then((res) => {
      axiosInstance.get(`/user_subscription`)
      .then(res => {
        console.log(res.data)
        setuserCategorys(res.data)      
          });
      console.log(res.data)
      setCategory(res.data)})
  }
  const Subscription = (e , id) => {
     e.preventDefault();
    axiosInstance.get(`/subscription/${id}`)
    .then(res => {console.log("Subscription")
        });
        user_subscription()
        showcats()
      }
      const unSubscription = (e , id) => {
        e.preventDefault();
       axiosInstance.get(`/unsubscription/${id}`)
       .then(res => {console.log("unSubscription")
           });
         user_subscription()
         showcats()
         
         }
   const user_subscription = () => {
    axiosInstance.get(`/user_subscription`)
    .then(res => {
      console.log(res.data)
      setuserCategorys(res.data)      
        });
   }
      // const Subscription = (id) => {
      //   axiosInstance.get(`/subscription/${id}`)
      //   .then(res => {console.log("Subscription")
          
      //       });
          
      //     }
      /********************************************************************************* */

      const Card = (props) => (
        <div className="card">
          <img src={ props.imgUrl } 
            alt={ props.alt || 'Image' } />
          <div className="card-content">
            <h2 style={{textAlign:"center",color:"#2c9db7"}}>{ props.title }</h2>
          </div>
        </div>
      );
      const CardContainer = (props) => (
        <div className="cards-container">
          {
            props.cards.map((category) => (
              <Card title={ category.name }
                imgUrl={ "http://127.0.0.1:8000" + category.image } />
            ))
          }
        </div>
      );
      class App extends React.Component {
        render () {
          return(
            <div className="container" style={{marginTop:"3%"}}>
              <CardContainer cards={ category  } />
            </div>
          );
        }
      }
      
      ReactDOM.render(<App/>, document.querySelector('#app'));
      
/************************************************************************************** */
  return (
    // {category.map((category, index) => {
    //   return (
    //       <div class="col-3 card text-center text-white bg-secondary  ms-4 mt-2">
    //       <div class="card-header">
    //       Category
    //       </div>
    //       <div class="card-body">
    //        <Link to={`/category/${category.id}`}>  <h5 class="card-title">{category.name}</h5> </Link>
    //        { !usercategorys.includes(category.id) ?
    //         <a onClick={(e) => Subscription(e , category.id)} class="btn btn-primary"> subscripe </a>
    //         :
    //         <a onClick={(e) => unSubscription(e , category.id)} class="btn btn-danger"> Unsubscripe </a>
    //        }
            
    //       </div>
    //       <div class="card-footer text-muted">
    //         2 days ago
    //       </div>
    // <div className='container' >
    //   <div className='row'>
        
    //   <h1 className='text-light'> Categories</h1>
    //   <hr></hr>
    //     {category.map((category, index) => {
    //       return (
            
    //           <div class="col-3 card text-center text-white bg-secondary  ms-4 mt-2">
    //           <div class="card-header">
    //           Category
    //           </div>
    //           <div class="card-body">
    //             <h5 class="card-title">{category.name}</h5>
    //             <a href="#" class="btn btn-primary"> <Link to={"/subscription/" + category.id} > subscribe </Link> </a>
    //           </div>
    //           <div class="card-footer text-muted">
    //             2 days ago
    //           </div>
    //         </div>
            
    //       );
    //     })}
    // </div>
    // </div>
    <>
    </>
  )
}
