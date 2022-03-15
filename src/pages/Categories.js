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

export default function Categories() {
  const [category, setCategory] = useState([])
  const navigate = useNavigate();
  // const [subscription, updateSubscription]useState({
  //   props1: "subscription",
  //   props2: "unsubscription",
  // })

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/categorys')
      .then((res) => setCategory(res.data))
    
  }, [])

  const Subscription = (id) => {
    axiosInstance.get(`/subscription/${id}`)
    .then(res => {console.log("Subscription")
      
        });
      
      }
      // const Subscription = (id) => {
      //   axiosInstance.get(`/subscription/${id}`)
      //   .then(res => {console.log("Subscription")
          
      //       });
          
      //     }
  return (
    <div className='container' >
      <div className='row'>
        
      <h1 className='text-light'> Categories</h1>
      <hr></hr>
        {category.map((category, index) => {
          return (
            // <div className="cat">
              // <div className="wrapper">
              // <div className="cards">

              // <Card style={{ width: '18rem' }}>
             
              //   <Card.Body>
              //   <Link key={index} to={`/details/category/${category.id}`}>
              //     <Card.Title>{category.name}</Card.Title>
              //     </Link>
              //   <img src={category.cat_picture}/>
              //     <Card.Text>
                  
              //     </Card.Text>
              //     <Link type="button" className="btn" to={"/subscription/" + category.id} 
              //     style={{backgroundColor: "#74b9ff"}}
              //      onClick={() => Subscription(category.id)}>subscribe</Link> 
              //   </Card.Body>
              // </Card>

              // </div>
              // </div>
              <div class="col-3 card text-center text-white bg-secondary  ms-4 mt-2">
              <div class="card-header">
              Category
              </div>
              <div class="card-body">
                <h5 class="card-title">{category.name}</h5>
                <a href="#" class="btn btn-primary"> <Link to={"/subscription/" + category.id} > subscribe </Link> </a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
            
          );
        })}
    </div>
    </div>
  )
}
