import {React,  useState ,useEffect } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'

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

import { axiosInstance } from '../utils/axiosInstance';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

export default function Navbar() {
    const {logoutUser,user } = useContext(AuthContext)
    const loggedin = () =>{
      return localStorage.getItem('authTokens') 
    }
    const [adminuser, setAdminuser] = useState(false); 
    const [fullscreen, setFullscreen] = useState(true);
    const values = [true];
    const [show, setShow] = useState(false);
    useEffect(() => {
      axiosInstance.get("/profile").then(
        (res) => { 
          console.log(res.data.is_admin)
          setAdminuser(res.data.is_admin)
        }
      )
    }, [])
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  return (
    
     
    <div className="Container  ">
    <div className="row" > 
    <div className="nav">
        {values.map((v, idx) => (
          
        <h1 key={idx} className="me-2" onClick={() => handleShow(v)}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          Livre
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </h1>
      ))}

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>LIVRE</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <ul className= "modal">
              <li><Link className="nav-link" to="/">Home</Link> </li>
              <li><Link className="nav-link" to="/category">Categories</Link></li>
              <li><Link className="nav-link" to="/contactus">Contactus</Link></li>
              <li><Link className="nav-link" to="/Who we are">Whoweare</Link></li>
              <li> <Link className="nav-link" to="/books"> Books </Link></li>
            </ul>
          </Modal.Body>
        </Modal>
       </div>

  
      <div className='account '>
        
         {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
        <DropdownButton  variant="outline-info"
        align="end" title="Account" id="dropdown-menu-align-end">
          { user ? 
          <> 
        <Dropdown.Item eventKey="1"><Link className="nav-link" to="/main-profile">Profile</Link></Dropdown.Item>
        <Dropdown.Item eventKey="2"> <Link className="nav-link" to="/messages"> Messages</Link></Dropdown.Item>
        <Dropdown.Item eventKey="3"><Link className="nav-link" to="/transactions">Transactions</Link></Dropdown.Item>
        <Dropdown.Divider />
       <Dropdown.Item eventKey="4"><Link class="nav-link" to="/books"> Books </Link></Dropdown.Item>
          </>  : null
          }
       </DropdownButton>
      
     
       <Button variant="light"><Link class="nav-link" to="/register">Register</Link></Button>
       <Button variant="outline-info">{ user ? (  <li class="nav-item active">
          <a class="nav-link"  onClick={logoutUser}>Logout </a>
        </li>) : 
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        }</Button>
        <div>
        {adminuser && ( 
           
            <li className="nav-item">
           <Link className="nav-link" to="/adminmanage">Manage</Link>
         </li>
         )}
        
     </div> 
       </div>  
      </div>
      </div>
     
     

   )
 }


