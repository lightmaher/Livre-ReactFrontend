import React from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './Navbar.css';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Navbar() {
    const {logoutUser,user } = useContext(AuthContext)
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
   

 function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  return (

    <div className='Container '>
    <div className='row col-12'>
    <div className=" nav col-4 ">
        {values.map((v, idx) => (
          
        <h1 key={idx} className="me-2" onClick={() => handleShow(v)}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          Livre
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </h1>
      ))}

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li><Link class="nav-link" to="/">Home</Link> </li>
              <li><Link class="nav-link" to="/category">Categories</Link></li>
              <li><Link class="nav-link" to="/contactus">Contactus</Link></li>
              <li><Link class="nav-link" to="/Who we are">Whoweare</Link></li>
            </ul>
          </Modal.Body>
        </Modal>
       </div>


      <div className='account col-4'>
        <div className='btn' >
         {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
        <DropdownButton  variant="outline-info"
        align="end" title="Account" id="dropdown-menu-align-end">
          
        <Dropdown.Item eventKey="1"><Link class="nav-link" to="/profile">Profile</Link></Dropdown.Item>
        <Dropdown.Item eventKey="2"><Link class="nav-link" to="/register">Register</Link></Dropdown.Item>
        <Dropdown.Item eventKey="3">
        { user ? (  <li class="nav-item active">
          <a class="nav-link"  onClick={logoutUser}>Logout </a>
        </li>) : 
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        }
        </Dropdown.Item>
        <Dropdown.Divider />
       <Dropdown.Item eventKey="4"><Link class="nav-link" to="/books"> Books </Link></Dropdown.Item>
      </DropdownButton>
      </div>
      <div className='col-4'>  
      <Button variant="primary">
       Profile <Badge bg="secondary">9</Badge>
     <span className="visually-hidden">unread messages</span>
       </Button>
     
      </div>
      </div>
  </div>
  </div>
  )
}
