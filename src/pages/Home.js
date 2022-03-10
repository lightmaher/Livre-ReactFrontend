import React from 'react'
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
        <div>
  <FloatingLabel
    controlId="floatingInput"
    label="Search"
    className="mb-3" >
    <Form.Control type="search" placeholder="search" onChange={e => setSearchValue(e.target.value)}/>
    <Link className='btn btn-info' variant="primary" type="button" to={"/search/"+searchValue} >search</Link>
  </FloatingLabel>
  

  {/* <InputGroup className="mb-3">
    <Button variant="outline-secondary" id="button-addon1">
      Button
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup> */}
  </div>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=eee"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"/>
    
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
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