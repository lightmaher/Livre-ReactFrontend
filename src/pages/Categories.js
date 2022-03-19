import React, { useContext } from 'react'
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
import { AuthContext } from '../Context/AuthContext';


export default function Categories() {
  const [category, setCategory] = useState([])
  const [usercategorys, setuserCategorys] = useState([])
  const {user} = useContext(AuthContext)

  const navigate = useNavigate();
 
  useEffect(() => {
    showcats()
  }, [])
  const showcats = () =>{
    axios
    .get('http://127.0.0.1:8000/api/categorys')
    .then((res) => {
      axiosInstance.get(`/user_subscription`)
      .then(res => {
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
        console.log("usercategory")
        console.log(usercategorys)
   }
     
      /********************************************************************************* */

      const Card = (props) => (
        <div className="card">
          <img style={{height:"250px"}} src={ props.imgUrl } 
            alt={ props.alt || 'Image' } />
          <div className="card-content" style={{textAlign:"center",color:"#2c9db7"}}>
           <h2 >{ props.title }</h2>
           { user ? (
           <a class="btn"> {props.subscripe} </a>
           ) :  null
          }
          </div>
        </div>
      );
      
      const CardContainer = (props) => (
        <div className="cards-container">
          {
            props.cards.map((category) => (
              <Card title={<a style={{textAlign:"center",color:"#2c9db7",textTransform:"uppercase",fontWeight:"normal", backgroundColor:"#fff"}} href = {`/category/${category.id}`}>{category.name}</a>  }
                imgUrl={ "http://127.0.0.1:8000" + category.image } 
                
                subscripe={ !usercategorys.includes(category.id) ?
                  <a style={{backgroundColor:"#2c9db7",color:"#ffffff"}} onClick={(e) => Subscription(e , category.id)} class="btn" > Subscribe </a>
                  :
                 <a onClick={(e) => unSubscription(e , category.id)} class="btn btn-danger"> Unsubscribe </a>
                }
                />
            ))
          }
        </div>
      );
      
/************************************************************************************** */
  return (
    <>
        <div className="container" style={{marginTop:"5%",marginBottom:"5%"}}>
            <CardContainer cards={ category  } />
        </div>
    </>
  )
}
