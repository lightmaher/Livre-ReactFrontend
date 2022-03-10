import React from 'react'
import './Home.css' ;
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosInstance } from '../utils/axiosInstance';
import Card from 'react-bootstrap/Card'
import { useParams } from "react-router-dom";

import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// import slide from './src/Images/slide.png'
export default function Home() {
  const[searchValue,setSearchValue]=useState([])
  
  const[resulte,setResulte]=useState([]
  
    // 'search': searchValue,
    // 'res': []   
);

const params = useParams();

  console.log(resulte)

    return (
      <div>
    <div className='search-bar'>
   <div className="st">
    <h2 >
    Your online book  Library to you with Zero Cost 
   </h2>
   <small>
        ready for exchange or donate or more and more 
    </small>
   </div>
  <InputGroup 
    controlId="floatingInput"
    label="Search"
    className="mb-3" >
    <Form.Control type="search" placeholder="Search for your desired Book to get it for free or exchange "style={{height:'4em'}} aria-describedby="basic-addon2" onChange={e => setSearchValue(e.target.value)}/>
    <Link className='btn btn-info ' variant="outline-secondary" style={{color:'#ffff' ,  padding:'2%',width:'10em'}} id="button-addon2  "  type="button" to={"/search/"+searchValue} ><span style={{padding:'5%' , marginLeft:'4%'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>Search</Link>
  </InputGroup>
  
  </div>
 <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require (`../Images/slider/Book1.png`)}
      alt="First slide"
      style={{height :'25em'}}
    />
    {/* <Carousel.Caption style={{color:'#ffff' ,fontWeight:'bolder' , fontSize:'2em'}}>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
     */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require (`../Images/slider/Book2.png`)}
      alt="Second slide"
      style={{height :'25em'}}
    />
    {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require (`../Images/slider/Book3.png`)}
      alt="Third slide"
      style={{height :'25em'}}
      />
    
    {/* <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
<div className='row col-12 '>
<Card className="bg-dark text-white">
  <Card.Img src= "" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
</div>
    )}